
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ServicesGridProps {
  onServiceSelect: (id: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onServiceSelect }) => {
  const handleServiceClick = (serviceId: string) => {
    onServiceSelect(serviceId);
  };

  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">One App, Infinite Possibilities</h2>
            <p className="text-lg text-slate-600">From the best local flavors to your daily grocery needs, Nibbo is the ultimate companion for your busy lifestyle.</p>
          </div>
          <button 
            className="text-[#F7941D] font-bold flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
          >
            See all services 
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              onClick={() => handleServiceClick(service.id)}
              className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer active:scale-[0.98]"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.name}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
              <button 
                className="w-full py-3.5 px-6 rounded-2xl border-2 border-slate-50 text-slate-900 font-bold group-hover:bg-[#0F3D2E] group-hover:text-white group-hover:border-[#0F3D2E] group-hover:shadow-lg transition-all duration-300 pointer-events-none"
              >
                Launch {service.name.split(' ')[1]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
