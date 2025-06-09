
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "M.Tech in Geoinformatics and Natural Resources Engineering",
      school: "IIT Bombay",
      year: "September 2022 - June 2024",
      focus: "Geospatial Data Analysis & Machine Learning",
      achievements: ["CGPA: 8.93/10", "Research in ML applications", "Geoinformatics specialization"]
    },
    {
      degree: "B.Tech in Electrical Engineering",
      school: "IIT Jodhpur",
      year: "August 2017 - June 2021",
      focus: "Signal Processing & Control Systems",
      achievements: ["CGPA: 6.78/10", "Electrical Engineering foundations", "Technical project experience"]
    },
    {
      degree: "Higher Secondary",
      school: "City Montessori Inter College",
      year: "August 2015 - June 2017",
      focus: "Science & Mathematics",
      achievements: ["Percentage: 91.8/100", "Strong academic foundation", "Science specialization"]
    }
  ];

  const skills = [
    "Machine Learning & Deep Learning",
    "Python Programming",
    "PyTorch & OpenCV",
    "Natural Language Processing",
    "Computer Vision",
    "Data Analysis & Visualization"
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Education & Credentials
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Academic Background</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <span className="text-sm text-purple-400 bg-purple-500/20 px-2 py-1 rounded">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-300 text-sm mb-3">{edu.focus}</p>
                    <div className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-sm text-gray-400">
                          <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills & Resume */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-purple-400">Core Skills</h3>
            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20 mb-8">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-purple-500/30">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold mb-4 text-white">Get In Touch</h4>
                <div className="space-y-2 text-gray-300 mb-6">
                  <p>📧 dheerajk1511@gmail.com</p>
                  <p>📱 +91 7355399112</p>
                  <p>🔗 github.com/Dheeraj024</p>
                  <p>💼 linkedin.com/in/dheerajdk024</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center gap-2 mx-auto">
                  <Download size={20} />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
