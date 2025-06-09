
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: [
        { name: "Supervised Learning", level: 85 },
        { name: "Unsupervised Learning", level: 80 },
        { name: "Deep Learning", level: 88 },
        { name: "Computer Vision", level: 90 },
        { name: "NLP", level: 82 }
      ],
      color: "blue"
    },
    {
      title: "Programming & Frameworks",
      skills: [
        { name: "Python", level: 92 },
        { name: "PyTorch", level: 85 },
        { name: "OpenCV", level: 88 },
        { name: "Pandas", level: 87 },
        { name: "NumPy", level: 90 }
      ],
      color: "purple"
    },
    {
      title: "Data Science Tools",
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "Matplotlib", level: 83 },
        { name: "Seaborn", level: 80 },
        { name: "NLTK", level: 78 },
        { name: "SpaCy", level: 75 }
      ],
      color: "green"
    },
    {
      title: "Development & Tools",
      skills: [
        { name: "React.js", level: 82 },
        { name: "Django", level: 80 },
        { name: "Flask", level: 83 },
        { name: "Git", level: 85 },
        { name: "SQL", level: 78 }
      ],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      pink: "from-pink-500 to-pink-600"
    };
    return colors[color as keyof typeof colors];
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: "border-blue-500/20",
      purple: "border-purple-500/20",
      green: "border-green-500/20",
      pink: "border-pink-500/20"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`bg-black/40 backdrop-blur-md border ${getBorderColor(category.color)} hover:border-opacity-60 transition-all duration-300`}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-blue-400">
            Technologies & Tools
          </h3>
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
    </div>
  );
};

export default SkillsSection;
