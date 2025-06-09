
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Neural Network Image Classifier",
      description: "Deep learning model achieving 97% accuracy on CIFAR-10 dataset using CNN architecture with data augmentation and transfer learning.",
      tech: ["Python", "TensorFlow", "CNN", "Transfer Learning"],
      type: "Professional",
      image: "photo-1487058792275-0ad4aaf24ca7",
      github: "#",
      demo: "#"
    },
    {
      title: "NLP Sentiment Analysis Platform",
      description: "Real-time sentiment analysis system processing 10K+ social media posts daily using BERT and transformer models.",
      tech: ["BERT", "PyTorch", "Flask", "Docker"],
      type: "Professional",
      image: "photo-1526374965328-7f61d4dc18c5",
      github: "#",
      demo: "#"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard predicting customer churn with 89% accuracy using ensemble methods and feature engineering.",
      tech: ["Scikit-learn", "Streamlit", "Pandas", "XGBoost"],
      type: "Personal",
      image: "photo-1531297484001-80022131f5a1",
      github: "#",
      demo: "#"
    },
    {
      title: "Computer Vision Art Generator",
      description: "GANs-based art generation system creating unique digital artwork from text prompts with style transfer capabilities.",
      tech: ["GANs", "StyleGAN", "OpenCV", "Stable Diffusion"],
      type: "Personal",
      image: "photo-1485827404703-89b55fcc595e",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Projects & Work
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.type === "Professional" 
                      ? "bg-blue-600/80 text-blue-100" 
                      : "bg-purple-600/80 text-purple-100"
                  }`}>
                    {project.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
