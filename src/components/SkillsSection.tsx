
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  return (
    <div className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technologies & Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Python", "PyTorch", "OpenCV", "Scikit-learn", "Pandas", "NumPy", 
            "Matplotlib", "Seaborn", "NLTK", "SpaCy", "React.js", "Django", 
            "Flask", "Git", "SQL", "MongoDB", "PostgreSQL", "Streamlit", 
            "PowerBI", "CUDA", "Plotly", "Jupyter", "Linux"
          ].map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
