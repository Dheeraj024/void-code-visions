
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, User, FolderOpen, GraduationCap, Code, Heart, Clock, Mail, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
    { id: "hobbies", label: "Hobbies", icon: Heart },
    { id: "timeline", label: "Journey", icon: Clock },
    { id: "contact", label: "Contact", icon: Mail },
    { id: "blog", label: "Blog", icon: BookOpen },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-full text-gray-300 hover:text-cyan-400 transition-colors duration-200"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center space-x-3 px-6 py-3 text-lg font-medium transition-colors duration-200 rounded-full",
                    activeSection === item.id
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-cyan-400"
                  )}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 bg-black/20 border border-cyan-500/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200",
                  "text-gray-300 hover:text-cyan-400",
                  isActive && "text-cyan-400"
                )}
              >
                <span className="hidden lg:inline">{item.label}</span>
                <span className="lg:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 w-full bg-cyan-400/10 rounded-full -z-10 border border-cyan-400/20"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-cyan-400/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-cyan-400/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-cyan-400/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;
