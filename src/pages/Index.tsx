
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import HobbiesSection from "@/components/HobbiesSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "education", "skills", "hobbies", "timeline", "contact", "blog"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Enhanced futuristic background with moving gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation activeSection={activeSection} />
        
        <main>
          <section id="hero">
            <HeroSection />
          </section>
          
          <section id="about">
            <AboutSection />
          </section>
          
          <section id="projects">
            <ProjectsSection />
          </section>
          
          <section id="education">
            <EducationSection />
          </section>
          
          <section id="skills">
            <SkillsSection />
          </section>
          
          <section id="hobbies">
            <HobbiesSection />
          </section>
          
          <section id="timeline">
            <TimelineSection />
          </section>
          
          <section id="contact">
            <ContactSection />
          </section>
          
          <section id="blog">
            <BlogSection />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
