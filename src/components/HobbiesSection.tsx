import { Card, CardContent } from "@/components/ui/card";
import { ImageSwiper } from "@/components/ImageSwiper";
const HobbiesSection = () => {
  const hobbies = [{
    title: "Digital Art & AI Art",
    description: "Creating unique digital artwork using generative AI and traditional digital painting techniques.",
    image: "photo-1470813740244-df37b8c1edcb",
    category: "Creative"
  }, {
    title: "Photography",
    description: "Capturing moments and experimenting with computational photography and image processing.",
    image: "photo-1526374965328-7f61d4dc18c5",
    category: "Visual"
  }, {
    title: "Music Production",
    description: "Composing electronic music and exploring AI-assisted music generation algorithms.",
    image: "photo-1487058792275-0ad4aaf24ca7",
    category: "Audio"
  }, {
    title: "3D Modeling",
    description: "Building 3D models and exploring procedural generation for virtual environments.",
    image: "photo-1485827404703-89b55fcc595e",
    category: "Technical"
  }];

  // Sample artwork images for the swiper
  const artworkImages = ["https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1569420958889-51e813d67cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"].join(', ');
  return <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Creative Pursuits
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => <Card key={index} className="bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group overflow-hidden">
              <div className="relative overflow-hidden h-48">
                <img src={`https://images.unsplash.com/${hobby.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} alt={hobby.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/80 text-blue-100 text-xs font-semibold rounded-full">
                    {hobby.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{hobby.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-300 leading-relaxed">{hobby.description}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Interactive Art Gallery with Swiper */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-purple-400">My Artwork Gallery</h3>
          <p className="text-gray-400 mb-8 text-sm">Swipe through my creations</p>
          
          <div className="flex justify-center">
            <ImageSwiper images={artworkImages} cardWidth={280} cardHeight={380} className="mx-auto" />
          </div>
          
          
        </div>
      </div>
    </div>;
};
export default HobbiesSection;