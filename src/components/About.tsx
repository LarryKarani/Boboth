import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

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

    const elements = [sectionRef.current, missionRef.current, visionRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-amber-500">Us</span></h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg">
            Boboth Studios is a film production and photography brand based in Nairobi, Kenya, directed by Braddox Ogilo, 
            a cinematographer, photographer, and creative visionary. We carry out a wide variety of commercial work, 
            from corporate and business video production, promo films and commercials, to mini-documentaries and brand 
            partnerships and collaborations.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-lg">
            We are known for generating high-end, narrative-driven, and "cinematic" works with a recognizable "filmic" 
            aesthetic and high production values. We are passionate about telling stories and helping businesses connect 
            with their audiences in a meaningful way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div 
            ref={missionRef}
            className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 opacity-0 transition-opacity duration-1000 hover:border-amber-500 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-amber-500">Our Mission</h3>
            <p className="text-gray-300">
              To be the leading Pan-African visual storytelling company, empowering creatives to make a living from their work 
              by providing them with the resources and support they need to succeed.
            </p>
          </div>

          <div 
            ref={visionRef}
            className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 opacity-0 transition-opacity duration-1000 hover:border-amber-500 transition-all animation-delay-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-amber-500">Our Vision</h3>
            <p className="text-gray-300">
              To inspire and entertain the world with authentic and compelling African stories that reflect the diversity 
              and richness of the continent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;