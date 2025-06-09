
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: [
        { name: "Supervised Learning", level: 95 },
        { name: "Unsupervised Learning", level: 90 },
        { name: "Reinforcement Learning", level: 85 },
        { name: "Feature Engineering", level: 92 },
        { name: "Model Optimization", level: 88 }
      ],
      color: "blue"
    },
    {
      title: "Deep Learning",
      skills: [
        { name: "Neural Networks", level: 93 },
        { name: "CNNs", level: 95 },
        { name: "RNNs/LSTMs", level: 87 },
        { name: "Transformers", level: 89 },
        { name: "GANs", level: 82 }
      ],
      color: "purple"
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "Python", level: 96 },
        { name: "TensorFlow/Keras", level: 92 },
        { name: "PyTorch", level: 89 },
        { name: "Scikit-learn", level: 94 },
        { name: "SQL", level: 88 }
      ],
      color: "green"
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Data Analysis", level: 93 },
        { name: "Statistical Modeling", level: 91 },
        { name: "Data Visualization", level: 87 },
        { name: "A/B Testing", level: 85 },
        { name: "ETL Pipelines", level: 83 }
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
            Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Python", "R", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", 
              "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Docker", 
              "Kubernetes", "AWS", "GCP", "Apache Spark", "Hadoop", "MLflow",
              "Git", "Jupyter", "Linux", "MongoDB", "PostgreSQL"
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
