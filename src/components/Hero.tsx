import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Cinematography" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
        <h1 
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
        >
          <span className="text-amber-500">Visual Storytelling</span> <br />
          from the Heart of Africa
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-300">
          Boboth Studios is a film production and photography brand based in Nairobi, Kenya, 
          creating high-end, narrative-driven cinematic works with recognizable "filmic" aesthetic.
        </p>
        <button 
          onClick={scrollToAbout}
          className="bg-amber-500 text-black px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors duration-300 opacity-0 animate-fade-in animation-delay-600 flex items-center mx-auto"
        >
          Discover Our Story
          <ArrowDown className="ml-2" size={18} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-amber-500" size={32} />
      </div>
    </section>
  );
};

export default Hero;