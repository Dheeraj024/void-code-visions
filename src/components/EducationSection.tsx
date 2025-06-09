
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      school: "Stanford University",
      year: "2018-2022",
      focus: "Machine Learning & Artificial Intelligence",
      achievements: ["Summa Cum Laude", "Research Fellowship", "Published 8 papers"]
    },
    {
      degree: "M.S. in Data Science",
      school: "MIT",
      year: "2016-2018",
      focus: "Statistical Learning & Deep Neural Networks",
      achievements: ["GPA: 3.9/4.0", "Teaching Assistant", "Thesis on CNN Optimization"]
    },
    {
      degree: "B.S. in Mathematics",
      school: "UC Berkeley",
      year: "2012-2016",
      focus: "Applied Mathematics & Statistics",
      achievements: ["Magna Cum Laude", "Math Society President", "Research Grant Recipient"]
    }
  ];

  const certifications = [
    "Google Cloud Professional ML Engineer",
    "AWS Certified Machine Learning - Specialty",
    "TensorFlow Developer Certificate",
    "Deep Learning Specialization (Coursera)",
    "MLOps Engineering Certificate"
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

          {/* Certifications & Resume */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-purple-400">Certifications</h3>
            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20 mb-8">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></span>
                      {cert}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-purple-500/30">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold mb-4 text-white">Download Resume</h4>
                <p className="text-gray-300 mb-6">
                  Get the complete overview of my experience, skills, and achievements in a comprehensive PDF format.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center gap-2 mx-auto">
                  <Download size={20} />
                  Download CV
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
