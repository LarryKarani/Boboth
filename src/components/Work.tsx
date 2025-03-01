import React, { useState, useEffect, useRef } from 'react';
import { Film, Camera, ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Work: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'film' | 'photo'>('film');
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

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

    const elements = [sectionRef.current, tabsRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const filmProjects = [
    {
      id: 1,
      title: 'Nanyuki Active',
      category: 'Brand Commercial/Short Film',
      description: 'Visually tell a story of the positioning of the brand and the target market it caters to.',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80',
      testimonial: 'The team, organisation, communication and final output are excellent. We have and would recommend their services both to direct clients and agencies wishing to partner with a professional, responsive film production company.',
      client: 'Isaac Hunja, founder Nanyuki Active'
    },
    {
      id: 2,
      title: 'Nkishon',
      category: 'Documentary Work',
      description: 'Create a visual masterpiece that captures the essence of Nkishon, showcasing the impact of their work on the community.',
      image: 'https://images.unsplash.com/photo-1516329901741-a2971a980fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
      testimonial: 'Words fail to describe how much we love the video. Seriously we can\'t thank you enough for your professionalism, hard work, attention to detail and all around awesome personalities.',
      client: 'Nkishon Ministry'
    },
    {
      id: 3,
      title: 'Sucafina',
      category: 'Documentary Work',
      description: 'Show Sucafina\'s collaboration with smallholder coffee farmers in Kenya.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      testimonial: 'We just looked at the video and we really like it! Congratulations for this amazing piece of work. Overall we are really happy with the service you provided.',
      client: 'Livio Roth, Head of Trading'
    },
    {
      id: 4,
      title: 'doTERRA',
      category: 'Documentary Work',
      description: 'Make a short documentary film to be showcased at doTERRA\'s annual convention in Salt Lake City, Utah.',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
      testimonial: 'Excellent work!!! I am so pleased with how this turned out. I look forward to continuing this relationship and to many more successful projects together!',
      client: 'Brandon Orton, Director, Global Story Creative at doTERRA'
    }
  ];

  const photoProjects = [
    {
      id: 5,
      title: 'From Rags Still Not Riches',
      category: 'Conceptual Photography',
      description: 'A metaphor for life\'s journey, from current place to desired destination.',
      image: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      testimonial: 'Personal Project by Braddox Odhiambo Ogilo',
      client: 'Spec Project/Personal Project'
    },
    {
      id: 6,
      title: 'Marangi',
      category: 'Documentary Photography',
      description: 'A photography project that tells the story of young Kenyans who have found an ingenious way to turn shoe shining into a profitable business.',
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1812&q=80',
      testimonial: 'Personal Project by Braddox Odhiambo Ogilo',
      client: 'Spec Project/Personal Project'
    },
    {
      id: 7,
      title: 'Fair Oils Operations',
      category: 'Documentary Photography',
      description: 'Photograph Fair Oils operations in all areas of operation for the company in Kenya.',
      image: 'https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      testimonial: 'Well photographed and retouched images showing the people behind the operations of the brand as well as that of the company\'s operations.',
      client: 'Fair Oils'
    },
    {
      id: 8,
      title: 'Kutoka Ardhini - Lunga Lunga',
      category: 'Documentary Photography',
      description: 'A documentary photography project showcasing the beauty and challenges of life in Lunga Lunga.',
      image: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      testimonial: 'Documentary Photography Work',
      client: 'Personal Project'
    }
  ];

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-amber-500">Work</span></h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg">
            Boboth Studios carries out a wide variety of commercial work, from corporate and business video production, 
            promo films and commercials, to mini-documentaries and brand partnerships and collaborations.
          </p>
        </div>

        <div 
          ref={tabsRef}
          className="flex justify-center mb-12 opacity-0 transition-opacity duration-1000"
        >
          <div className="inline-flex bg-gray-800 rounded-full p-1">
            <button
              className={`flex items-center px-6 py-3 rounded-full transition-all ${
                activeTab === 'film' ? 'bg-amber-500 text-black' : 'text-white hover:text-amber-500'
              }`}
              onClick={() => setActiveTab('film')}
            >
              <Film size={18} className="mr-2" />
              Filmmaking
            </button>
            <button
              className={`flex items-center px-6 py-3 rounded-full transition-all ${
                activeTab === 'photo' ? 'bg-amber-500 text-black' : 'text-white hover:text-amber-500'
              }`}
              onClick={() => setActiveTab('photo')}
            >
              <Camera size={18} className="mr-2" />
              Photography
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activeTab === 'film' ? (
            filmProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))
          ) : (
            photoProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;