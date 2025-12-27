import React from 'react';
import { ArrowLeft, Target, Eye, Shield, Zap, Users, Linkedin, Twitter, Github, Globe, ArrowRight, Award, MapPin } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

const VALUES = [
  { 
    icon: <Zap className="w-6 h-6" />, 
    title: "Relentless Speed", 
    desc: "We race against time because we know that in the modern world, a minute saved is a memory gained.",
    color: "bg-orange-50 text-orange-600"
  },
  { 
    icon: <Shield className="w-6 h-6" />, 
    title: "Uncompromising Trust", 
    desc: "Whether it's a vital prescription or a luxury meal, we handle every parcel with the care it deserves.",
    color: "bg-emerald-50 text-emerald-600"
  },
  { 
    icon: <Users className="w-6 h-6" />, 
    title: "Community Growth", 
    desc: "We empower local vendors and provide our Champions with industry-leading tools and fair opportunities.",
    color: "bg-blue-50 text-blue-600"
  },
  { 
    icon: <Target className="w-6 h-6" />, 
    title: "Precision Tech", 
    desc: "Our logistics engine uses advanced AI to optimize every route, ensuring we're the smartest way to move.",
    color: "bg-purple-50 text-purple-600"
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-[#0F3D2E] mb-12 font-bold transition-all group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-[#F7941D] text-xs font-black uppercase tracking-widest">
              The Nibbo Story
            </div>
            <h1 className="text-5xl lg:text-8xl font-[900] text-[#0F3D2E] leading-[0.95] tracking-tighter">
              The pulse of <span className="text-[#F7941D]">modern</span> logistics.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
              Nibbo was built on a simple premise: Everyone deserves premium delivery. We're bridging the gap between desire and arrival.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-2xl border border-slate-100">
                <Globe className="w-5 h-5 text-[#0F3D2E]" />
                <span className="font-bold text-slate-700">Lagos, NG</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-2xl border border-slate-100">
                <Users className="w-5 h-5 text-[#0F3D2E]" />
                <span className="font-bold text-slate-700">50k+ Champions</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative group bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="Nibbo Operations" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 glass-morphism p-8 rounded-[2rem] border-white/20">
                <p className="text-white font-bold text-lg leading-tight">
                  "Efficiency isn't just a goal; it's our promise to the city."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section - Grouped together for solid presence */}
        <div className="mb-40">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F3D2E]/5 text-[#0F3D2E] text-xs font-black uppercase tracking-widest mb-6">
              Leadership
            </div>
            <h2 className="text-5xl font-[900] text-[#0F3D2E] mb-6">The Founding Duo</h2>
            <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
              Engineering the future of hyper-local logistics, together.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-slate-50 rounded-[4rem] p-4 lg:p-8 border border-slate-100 relative overflow-hidden group shadow-xl">
             <div className="grid md:grid-cols-2 gap-4">
                {/* CEO Card */}
                <div className="bg-white rounded-[3.5rem] p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-orange-100 group/card">
                  <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-inner bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                      alt="Oladeinde Segun - CEO" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-xl shadow-lg">
                      <Linkedin className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F7941D]">CEO & Strategy</span>
                    <h3 className="text-3xl font-black text-[#0F3D2E]">Oladeinde Segun</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm px-4">
                      Visionary strategist leading Nibbo's mission to redefine African urban logistics.
                    </p>
                  </div>
                </div>

                {/* CTO Card */}
                <div className="bg-white rounded-[3.5rem] p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-green-100 group/card">
                  <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-inner bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" 
                      alt="Bankole Ebenezer - CTO" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                    />
                    <div className="absolute top-4 right-4 bg-[#0F3D2E] text-white p-2 rounded-xl shadow-lg">
                      <Linkedin className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0F3D2E]">CTO & Engineering</span>
                    <h3 className="text-3xl font-black text-[#0F3D2E]">Bankole Ebenezer</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm px-4">
                      Technical architect building the high-speed routing engines that power our city.
                    </p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-40">
          {VALUES.map((val, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
              <div className={`w-14 h-14 ${val.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12`}>
                {val.icon}
              </div>
              <h4 className="font-black text-slate-900 mb-3">{val.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-[#0F3D2E] rounded-[4rem] p-16 md:p-24 text-center text-white mb-40 relative overflow-hidden group shadow-2xl shadow-green-900/40">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            <div>
              <div className="text-6xl font-black mb-2">5M+</div>
              <div className="text-green-200/50 font-bold uppercase tracking-widest text-xs">Orders Fulfilled</div>
            </div>
            <div>
              <div className="text-6xl font-black mb-2">12k+</div>
              <div className="text-green-200/50 font-bold uppercase tracking-widest text-xs">Store Partners</div>
            </div>
            <div>
              <div className="text-6xl font-black mb-2">99%</div>
              <div className="text-green-200/50 font-bold uppercase tracking-widest text-xs">On-time Rate</div>
            </div>
            <div>
              <div className="text-6xl font-black mb-2">4.9</div>
              <div className="text-green-200/50 font-bold uppercase tracking-widest text-xs">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl font-[900] text-[#0F3D2E] mb-12">Move with the <span className="text-[#F7941D]">best.</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#0F3D2E] text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl active:scale-95">
              Get the App
            </button>
            <button className="bg-white text-[#0F3D2E] border-2 border-[#0F3D2E] px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-50 transition-all active:scale-95">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
