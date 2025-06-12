
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send, Mail, MessageSquare, User } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "💼",
      color: "bg-blue-600"
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "💻",
      color: "bg-gray-700"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "🐦",
      color: "bg-blue-500"
    },
    {
      name: "Kaggle",
      url: "https://kaggle.com",
      icon: "📊",
      color: "bg-teal-600"
    },
    {
      name: "Medium",
      url: "https://medium.com",
      icon: "📝",
      color: "bg-green-600"
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: "📹",
      color: "bg-red-600"
    }
  ];

  return (
    <div className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
                <MessageSquare className="text-blue-400" size={28} />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 bg-black/20 border-purple-500/30 text-white placeholder-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 bg-black/20 border-purple-500/30 text-white placeholder-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                </div>

                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-black/20 border-purple-500/30 text-white placeholder-gray-400 focus:border-blue-400"
                />

                <Textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="bg-black/20 border-purple-500/30 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                  required
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center gap-2 py-3"
                >
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="flex items-center gap-3">
                    <Mail className="text-blue-400" size={20} />
                    dheerajk1511@gmail.com
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-purple-400 text-xl">📱</span>
                    +91 7355399112
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-purple-400 text-xl">📍</span>
                    Available for Remote Work
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-blue-400 text-xl">🔗</span>
                    github.com/Dheeraj024
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Follow My Work</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} hover:scale-105 transition-transform duration-300 p-4 rounded-lg flex items-center gap-3 text-white font-medium`}
                    >
                      <span className="text-xl">{social.icon}</span>
                      {social.name}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
