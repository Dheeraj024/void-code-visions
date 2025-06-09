
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  return (
    <div className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Future Blog
        </h2>

        <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Blog Coming Soon
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
                I'm preparing to share insights, tutorials, and thoughts on the latest developments in machine learning, 
                deep learning, and AI research. Stay tuned for in-depth articles on cutting-edge techniques, 
                practical implementations, and industry trends.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Technical Tutorials</h4>
                <p className="text-sm text-gray-400">Step-by-step guides on implementing ML algorithms</p>
              </div>
              <div className="p-4 bg-purple-600/10 border border-purple-500/20 rounded-lg">
                <h4 className="font-semibold text-purple-400 mb-2">Research Insights</h4>
                <p className="text-sm text-gray-400">Analysis of latest papers and breakthrough discoveries</p>
              </div>
              <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Industry Trends</h4>
                <p className="text-sm text-gray-400">Commentary on AI adoption and future directions</p>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              Notify Me When Live
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogSection;
