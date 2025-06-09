
'use client'

import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

interface NodeProps {
  position: [number, number, number];
  id: string;
  connections: string[];
  hoveredNode: string | null;
  onHover: (id: string | null) => void;
}

const Node = ({ position, id, connections, hoveredNode, onHover }: NodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [currentScale, setCurrentScale] = useState(1);
  
  const isHovered = hoveredNode === id;
  const isConnected = hoveredNode && connections.includes(hoveredNode);
  
  useFrame(() => {
    if (meshRef.current) {
      let targetScale = 1;
      
      if (isHovered) {
        targetScale = 2.5;
      } else if (isConnected) {
        targetScale = 1.8;
      }
      
      const lerpFactor = 0.15;
      const newScale = currentScale + (targetScale - currentScale) * lerpFactor;
      setCurrentScale(newScale);
      
      meshRef.current.scale.setScalar(newScale);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerEnter={() => onHover(id)}
      onPointerLeave={() => onHover(null)}
      userData={{ nodeId: id }}
    >
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshPhysicalMaterial 
        color={isHovered ? "#00ffff" : isConnected ? "#0088ff" : "#ffffff"}
        roughness={0.1}
        metalness={0.8}
        clearcoat={1}
        clearcoatRoughness={0}
        emissive={isHovered ? "#004444" : isConnected ? "#002244" : "#000000"}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

interface ConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  isActive: boolean;
}

const Connection = ({ start, end, isActive }: ConnectionProps) => {
  const lineRef = useRef<THREE.Line>(null);
  
  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector3(...start),
      new THREE.Vector3(...end)
    ];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [start, end]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial 
        color={isActive ? "#00ffff" : "#444444"}
        transparent
        opacity={isActive ? 0.8 : 0.3}
        linewidth={isActive ? 3 : 1}
      />
    </line>
  );
};

function NeuralNetworkGrid() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  
  // Create neural network structure
  const networkData = useMemo(() => {
    const layers = [4, 6, 8, 6, 3]; // Input, hidden layers, output
    const nodes: { id: string; position: [number, number, number]; connections: string[] }[] = [];
    const connections: { start: [number, number, number]; end: [number, number, number]; startId: string; endId: string }[] = [];
    
    // Generate nodes
    layers.forEach((layerSize, layerIndex) => {
      for (let nodeIndex = 0; nodeIndex < layerSize; nodeIndex++) {
        const x = (layerIndex - layers.length / 2) * 6;
        const y = (nodeIndex - (layerSize - 1) / 2) * 2;
        const z = 0;
        
        const nodeId = `${layerIndex}-${nodeIndex}`;
        nodes.push({
          id: nodeId,
          position: [x, y, z],
          connections: []
        });
      }
    });
    
    // Generate connections between adjacent layers
    layers.forEach((layerSize, layerIndex) => {
      if (layerIndex < layers.length - 1) {
        const nextLayerSize = layers[layerIndex + 1];
        
        for (let currentNode = 0; currentNode < layerSize; currentNode++) {
          for (let nextNode = 0; nextNode < nextLayerSize; nextNode++) {
            const currentId = `${layerIndex}-${currentNode}`;
            const nextId = `${layerIndex + 1}-${nextNode}`;
            
            const currentNodeData = nodes.find(n => n.id === currentId);
            const nextNodeData = nodes.find(n => n.id === nextId);
            
            if (currentNodeData && nextNodeData) {
              currentNodeData.connections.push(nextId);
              nextNodeData.connections.push(currentId);
              
              connections.push({
                start: currentNodeData.position,
                end: nextNodeData.position,
                startId: currentId,
                endId: nextId
              });
            }
          }
        }
      }
    });
    
    return { nodes, connections };
  }, []);

  const { nodes, connections } = networkData;

  return (
    <>
      {/* Render connections */}
      {connections.map((conn, index) => (
        <Connection
          key={index}
          start={conn.start}
          end={conn.end}
          isActive={hoveredNode === conn.startId || hoveredNode === conn.endId}
        />
      ))}
      
      {/* Render nodes */}
      {nodes.map((node) => (
        <Node
          key={node.id}
          position={node.position}
          id={node.id}
          connections={node.connections}
          hoveredNode={hoveredNode}
          onHover={setHoveredNode}
        />
      ))}
    </>
  );
}

function CameraController() {
  const { camera } = useThree();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    camera.position.x = Math.sin(time * 0.1) * 2;
    camera.position.y = Math.cos(time * 0.15) * 1;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

export function NeuralNetworkVisualization() {
  return (
    <div className="h-full w-full bg-black relative">
      <Canvas 
        camera={{ 
          position: [15, 8, 15], 
          fov: 50 
        }}
      >
        <ambientLight intensity={0.4} />
        
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={1}
          color="#ffffff"
        />
        
        <directionalLight 
          position={[-10, -10, -10]} 
          intensity={0.5}
          color="#0088ff"
        />
        
        <pointLight 
          position={[0, 0, 10]} 
          intensity={1}
          distance={30}
          color="#00ffff"
        />
        
        <CameraController />
        <NeuralNetworkGrid />
      </Canvas>
    </div>
  );
}
