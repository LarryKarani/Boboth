import React, { useEffect, useRef } from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

    const elements = [sectionRef.current, formRef.current];
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
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-[#FF6347]">Touch</span></h2>
          <div className="w-20 h-1 bg-[#FF6347] mx-auto"></div>
          <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg">
            Ready to bring your story to life? Contact us today to discuss your project and how we can help you connect with your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-[#FF6347] p-3 rounded-lg mr-4">
                <Mail className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-300">brad@bobothstudios.com</p>
                <p className="text-gray-400 text-sm mt-2">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#FF6347] p-3 rounded-lg mr-4">
                <Phone className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-300">+254 703 118750</p>
                <p className="text-gray-400 text-sm mt-2">Available Monday-Friday, 9am-6pm EAT</p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <p className="text-gray-300">Nairobi, Kenya</p>
              <p className="text-gray-400 text-sm mt-4">
                We work with clients across East Africa and beyond. Whether you're in Nairobi or anywhere else in the world, 
                we're ready to bring your vision to life.
              </p>
            </div>
          </div>

          <form 
            ref={formRef}
            className="bg-gray-800/30 p-8 rounded-lg border border-gray-700 opacity-0 transition-opacity duration-1000"
          >
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6347]"
                placeholder="John Doe"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6347]"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6347]"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6347]"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-[#FF6347] text-black font-medium py-3 rounded-lg hover:bg-amber-400 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;