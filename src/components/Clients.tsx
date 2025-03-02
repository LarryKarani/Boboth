import React from 'react';

import Client1 from '../assets/client1.svg';
//import Client2 from '../assets/client2.svg';
import Client3 from '../assets/client3.svg';
//import Client4 from '../assets/client4.svg';
//import Client5 from '../assets/client5.svg';

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#FF6347]">Clients</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF6347] mx-auto"></div>
          <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg">
            We've had the privilege of working with some amazing organizations
            and brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Client logos */}
          <div className="w-full max-w-[200px] p-4 redscale hover:redscale-0 transition-all">
            <img src={Client1} alt="Client 1" className="w-full h-auto" />
          </div>
          <div className="w-full max-w-[200px] p-4 redscale hover:redscale-0 transition-all">
            <img src={Client3} alt="Client 1" className="w-full h-auto" />
          </div>
          <div className="w-full max-w-[200px] p-4 redscale hover:redscale-0 transition-all">
            <img src={Client1} alt="Client 1" className="w-full h-auto" />
          </div>
          <div className="w-full max-w-[200px] p-4 redscale hover:redscale-0 transition-all">
            <img src={Client3} alt="Client 1" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;