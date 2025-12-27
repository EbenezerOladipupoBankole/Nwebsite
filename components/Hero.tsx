
import React from 'react';
import { Search, MapPin, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white" id="home">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#F7941D] text-sm font-bold animate-fade-in">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7941D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F7941D]"></span>
              </span>
              Reliable Errands & Delivery
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-[800] text-slate-900 leading-[1.1] tracking-tight">
              Everything you love, <span className="text-[#0F3D2E]">delivered fast.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Nibbo is your everyday logistics partner. From gourmet meals to crucial errands, we handle it all with world-class precision.
            </p>

            <div className="relative max-w-2xl mx-auto lg:mx-0 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0F3D2E] to-[#F7941D] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex flex-col md:flex-row items-center gap-4 bg-white p-2.5 rounded-3xl border border-slate-200 shadow-xl">
                <div className="flex-1 flex items-center px-4 w-full">
                  <MapPin className="w-5 h-5 text-[#F7941D] mr-3" />
                  <input 
                    id="main-search-input"
                    type="text" 
                    placeholder="Enter delivery address..." 
                    className="w-full bg-transparent border-none focus:ring-0 text-slate-800 font-medium py-3 transition-all"
                  />
                </div>
                <button className="w-full md:w-auto px-8 py-4 nibbo-gradient text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" />
                  Find Nibbo
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-left">
                <div className="text-3xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-500 font-medium">Partner Stores</div>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="text-left">
                <div className="text-3xl font-bold text-slate-900">15m</div>
                <div className="text-sm text-slate-500 font-medium">Avg Delivery</div>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="text-left">
                <div className="text-3xl font-bold text-slate-900">4.9/5</div>
                <div className="text-sm text-slate-500 font-medium">Customer Rating</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
             <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&q=80&w=800" 
                  alt="Delivery Person" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
             </div>
             {/* Floating UI Elements */}
             <div className="absolute top-10 -left-10 z-20 glass-morphism p-4 rounded-2xl shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#F7941D]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Fastest Route Found</div>
                    <div className="text-xs text-slate-500">Arriving in 8 mins</div>
                  </div>
                </div>
             </div>
             
             <div className="absolute bottom-10 -right-10 z-20 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <img src="https://picsum.photos/id/102/50/50" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="text-sm font-bold text-[#0F3D2E]">Musa just ordered</div>
                    <div className="text-xs text-slate-500">Groceries & Medicine</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
