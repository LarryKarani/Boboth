import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  testimonial: string;
  client: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-gray-900 rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-[#FF6347]/10 transition-all duration-500 opacity-0 ${
        index % 2 === 0 ? 'transform-gpu translate-y-8' : 'transform-gpu -translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        animationDelay: `${index * 150}ms` 
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <span className="text-xs uppercase tracking-wider bg-[#FF6347] text-white px-3 py-1 rounded-full">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mt-2">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="mb-4 border-l-2 border-[#FF6347] pl-4 italic text-gray-400">
          "{project.testimonial.length > 120 ? project.testimonial.substring(0, 120) + '...' : project.testimonial}"
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#FF6347]">{project.client}</span>
          <button className="text-[#FF6347] hover:text-amber-400 transition-colors flex items-center text-sm">
            View Project <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;