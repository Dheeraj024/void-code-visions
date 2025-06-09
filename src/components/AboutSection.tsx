
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Data Science Passion</h3>
                <p className="text-gray-300 leading-relaxed">
                  With over 5 years of experience in machine learning and deep learning, I specialize in developing 
                  intelligent systems that drive business value. My expertise spans computer vision, natural language 
                  processing, and predictive analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Innovation Focus</h3>
                <p className="text-gray-300 leading-relaxed">
                  I thrive on transforming complex datasets into actionable insights. Whether it's building neural 
                  networks for image recognition or developing recommendation systems, I'm passionate about leveraging 
                  AI to solve real-world challenges.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full p-8 backdrop-blur-sm border border-purple-500/30">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <p className="text-lg font-medium text-blue-400">AI Enthusiast</p>
                  <p className="text-sm text-gray-400">Building the future</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <p className="text-gray-300">ML Models Deployed</p>
          </div>
          <div className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <p className="text-gray-300">Research Papers</p>
          </div>
          <div className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-blue-500/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
            <p className="text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
