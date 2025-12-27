
import React from 'react';
import { ArrowLeft, Star, Clock, ChevronRight, Zap, ShieldCheck, MapPin, Search } from 'lucide-react';
import { SERVICES } from '../constants';

interface ServicePageProps {
  serviceId: string;
  onBack: () => void;
}

const MOCK_DATA: Record<string, any> = {
  food: {
    title: "Best Restaurants Near You",
    items: [
      { name: "Burger King", rating: 4.5, time: "15-20 min", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=400" },
      { name: "Chicken Republic", rating: 4.8, time: "20-25 min", img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=400" },
      { name: "Mama's Kitchen", rating: 4.2, time: "30-40 min", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  grocery: {
    title: "Fresh Groceries & Essentials",
    items: [
      { name: "Shoprite Supermarket", rating: 4.7, time: "30-45 min", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400" },
      { name: "Nibbo Fresh Mart", rating: 4.9, time: "15-20 min", img: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  tech: {
    title: "Nibbo Tech & Gadget Hub",
    items: [
      { name: "MacBook Pro M3", rating: 5.0, time: "60 min", price: "₦1,800,000", img: "https://images.unsplash.com/photo-1517336714460-45788a1f4e86?auto=format&fit=crop&q=80&w=400" },
      { name: "iPhone 15 Pro Max", rating: 4.9, time: "45 min", price: "₦1,200,000", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400" },
      { name: "Sony WH-1000XM5", rating: 4.8, time: "30 min", price: "₦450,000", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400" },
      { name: "Gadget Repair Service", rating: 4.5, time: "Same Day", price: "Varies", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  pharmacy: {
    title: "Health & Wellness",
    items: [
      { name: "HealthPlus Pharmacy", rating: 4.8, time: "25 min", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=400" },
      { name: "MedPlus Express", rating: 4.6, time: "20 min", img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=400" }
    ]
  }
};

export const ServicePage: React.FC<ServicePageProps> = ({ serviceId, onBack }) => {
  const service = SERVICES.find(s => s.id === serviceId);
  const data = MOCK_DATA[serviceId] || { title: "Service Details", items: [] };

  if (!service) return null;

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-[#0F3D2E] mb-8 font-bold transition-all group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="flex-1 space-y-6">
            <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl`}>
              {service.icon}
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-[#0F3D2E] leading-tight">
              {service.name}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              {service.description} Fast, secure, and reliable delivery services designed for your comfort.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm font-bold bg-green-50 text-green-700 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4" /> 15m Delivery
              </div>
              <div className="flex items-center gap-2 text-sm font-bold bg-[#0F3D2E]/5 text-[#0F3D2E] px-4 py-2 rounded-full">
                <ShieldCheck className="w-4 h-4" /> Fully Insured
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-96 bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
             <div className="relative mb-6">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
               <input 
                 type="text" 
                 placeholder={`Search in ${service.name}...`}
                 className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#F7941D]"
               />
             </div>
             <h3 className="text-xl font-bold mb-4">Categories</h3>
             <div className="space-y-3">
                {serviceId === 'tech' ? (
                  ['Laptops', 'Smartphones', 'Repair Service', 'Audio', 'Accessories'].map(tag => (
                    <button key={tag} className="w-full text-left p-4 rounded-2xl bg-white border border-slate-100 hover:border-[#F7941D] transition-all font-bold flex justify-between items-center group">
                      {tag} <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#F7941D]" />
                    </button>
                  ))
                ) : (
                  ['Trending', 'Nearest', 'New Arrivals', 'Offers'].map(tag => (
                    <button key={tag} className="w-full text-left p-4 rounded-2xl bg-white border border-slate-100 hover:border-[#F7941D] transition-all font-bold flex justify-between items-center group">
                      {tag} <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#F7941D]" />
                    </button>
                  ))
                )}
             </div>
          </div>
        </div>

        {/* Dynamic Content */}
        {serviceId === 'errands' ? (
          <div className="space-y-16">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Describe', text: 'Tell our AI or support team exactly what you need.' },
                { title: 'Track', text: 'Watch your Nibbo Champion move across the city.' },
                { title: 'Receive', text: 'Confirm completion and rate your experience.' }
              ].map((step, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0F3D2E] text-white flex items-center justify-center font-black mx-auto mb-6">{i + 1}</div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-slate-500">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="p-20 text-center bg-green-50 rounded-[3rem] border-2 border-dashed border-green-200">
               <MapPin className="w-12 h-12 text-[#0F3D2E] mx-auto mb-6 animate-bounce" />
               <h3 className="text-2xl font-black text-[#0F3D2E] mb-4">No active errands</h3>
               <p className="text-slate-600 mb-8 max-w-md mx-auto">Use the Smart Planner on the home page to start your first Nibbo Go journey.</p>
               <button onClick={onBack} className="bg-[#0F3D2E] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all">Go to Smart Planner</button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-black text-[#0F3D2E] mb-10">{data.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.items.map((item: any, idx: number) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                    <img src={item.img} alt={item.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 font-bold text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {item.rating}
                    </div>
                    {item.price && (
                      <div className="absolute bottom-4 left-4 bg-[#0F3D2E] text-white px-4 py-2 rounded-xl font-black text-sm">
                        {item.price}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-[#F7941D] transition-colors">{item.name}</h4>
                      <div className="flex items-center gap-4 text-slate-400 text-sm mt-1">
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {item.time}</span>
                        <span>Free Delivery</span>
                      </div>
                    </div>
                    <button className="p-3 bg-slate-50 rounded-full hover:bg-[#0F3D2E] hover:text-white transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
