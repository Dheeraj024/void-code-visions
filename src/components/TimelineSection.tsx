
import { Card, CardContent } from "@/components/ui/card";

const TimelineSection = () => {
  const timeline = [
    {
      year: "2024",
      title: "Software Engineer",
      company: "Parachute Technology Private Limited",
      description: "Developing Maritime Search and Rescue Integrated Incident Management and Operational Planning Software for real-time monitoring and emergency response.",
      achievements: ["Lead stakeholder meetings for requirement analysis", "Designed MSAR architecture using React and Django", "Developed interactive layered map visualization using Leaflet.js"],
      type: "work",
      period: "July 2024 - Present"
    },
    {
      year: "2024",
      title: "M.Tech Graduate",
      company: "IIT Bombay",
      description: "Completed Master's in Geoinformatics and Natural Resources Engineering with focus on machine learning applications in geospatial analysis.",
      achievements: ["CGPA: 8.93/10", "Research on Gaussian Process Regression", "Specialized in geospatial data analysis"],
      type: "education",
      period: "September 2022 - June 2024"
    },
    {
      year: "2023",
      title: "Machine Learning Intern",
      company: "NoQs Digital",
      description: "Worked on Bitcoin transactions detection using machine learning techniques and developed various classification models.",
      achievements: ["Pre-processed Elliptic dataset with 23% illicit labels", "Evaluated supervised and unsupervised clustering methods", "Achieved F1-Score of 0.83 comparable to best baseline"],
      type: "work",
      period: "July 2023 - August 2023"
    },
    {
      year: "2021",
      title: "B.Tech Graduate",
      company: "IIT Jodhpur",
      description: "Completed Bachelor's in Electrical Engineering with foundation in signal processing and control systems.",
      achievements: ["CGPA: 6.78/10", "Strong technical foundation", "Electrical engineering expertise"],
      type: "education",
      period: "August 2017 - June 2021"
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
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <p className={`font-medium ${
                          item.type === "work" ? "text-blue-400" : "text-purple-400"
                        }`}>
                          {item.company}
                        </p>
                        <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                          {item.period}
                        </span>
                      </div>
                      
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
