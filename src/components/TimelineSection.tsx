
import { Card, CardContent } from "@/components/ui/card";

const TimelineSection = () => {
  const timeline = [
    {
      year: "2022",
      title: "Senior ML Engineer",
      company: "TechCorp AI",
      description: "Leading a team of 8 data scientists, developing large-scale ML systems processing 100M+ daily transactions.",
      achievements: ["Reduced model inference time by 40%", "Implemented MLOps pipeline", "Led AI ethics initiative"],
      type: "work"
    },
    {
      year: "2021",
      title: "Ph.D. Graduation",
      company: "Stanford University",
      description: "Completed doctoral research on 'Efficient Deep Learning for Edge Computing' with summa cum laude honors.",
      achievements: ["Published 8 research papers", "Best Thesis Award", "Research Fellowship recipient"],
      type: "education"
    },
    {
      year: "2020",
      title: "Research Scientist",
      company: "Google DeepMind",
      description: "Contributed to breakthrough research in reinforcement learning and neural architecture search.",
      achievements: ["Co-authored Nature paper", "Patent on RL optimization", "Open-sourced AutoML library"],
      type: "work"
    },
    {
      year: "2019",
      title: "ML Engineering Intern",
      company: "NVIDIA",
      description: "Optimized deep learning models for GPU acceleration, focusing on computer vision applications.",
      achievements: ["Improved training speed by 60%", "Developed CUDA kernels", "Mentored junior interns"],
      type: "work"
    },
    {
      year: "2018",
      title: "Master's Degree",
      company: "MIT",
      description: "Specialized in statistical learning theory and deep neural network optimization techniques.",
      achievements: ["GPA: 3.9/4.0", "TA for ML course", "Published thesis work"],
      type: "education"
    },
    {
      year: "2016",
      title: "Research Assistant",
      company: "UC Berkeley",
      description: "First exposure to machine learning research, working on probabilistic models and Bayesian inference.",
      achievements: ["First research publication", "Grant recipient", "Honors graduate"],
      type: "education"
    }
  ];

  return (
    <div className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Professional Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                  item.type === "work" 
                    ? "bg-blue-600 border-blue-400" 
                    : "bg-purple-600 border-purple-400"
                }`}>
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mt-2 sm:mt-0 ${
                          item.type === "work" 
                            ? "bg-blue-600/20 text-blue-300 border border-blue-500/30" 
                            : "bg-purple-600/20 text-purple-300 border border-purple-500/30"
                        }`}>
                          {item.type === "work" ? "Professional" : "Academic"}
                        </span>
                      </div>
                      
                      <p className={`font-medium mb-3 ${
                        item.type === "work" ? "text-blue-400" : "text-purple-400"
                      }`}>
                        {item.company}
                      </p>
                      
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-400">Key Achievements:</h4>
                        {item.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></span>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
