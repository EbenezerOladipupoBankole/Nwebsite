
import React from 'react';
import { Star, Download, Search, ArrowLeft, MoreVertical, Menu } from 'lucide-react';

export const PlayStoreMockup: React.FC = () => {
  return (
    <div className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden transform lg:rotate-6 hover:rotate-0 transition-transform duration-700">
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
      
      {/* Play Store Interface */}
      <div className="absolute inset-0 bg-white flex flex-col font-sans">
        {/* Status Bar */}
        <div className="h-6 w-full px-6 flex justify-between items-center text-[10px] font-bold text-slate-400">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-2 bg-slate-400 rounded-sm"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-sm"></div>
          </div>
        </div>

        {/* Play Store Top Bar */}
        <div className="p-4 flex items-center justify-between border-b border-slate-100">
          <ArrowLeft className="w-5 h-5 text-slate-600" />
          <div className="flex gap-4">
            <Search className="w-5 h-5 text-slate-600" />
            <MoreVertical className="w-5 h-5 text-slate-600" />
          </div>
        </div>

        {/* App Info Header */}
        <div className="p-4 flex gap-4">
          <div className="w-16 h-16 bg-[#0F3D2E] rounded-2xl flex items-center justify-center shadow-lg">
             <span className="text-white font-black text-2xl italic">N</span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 leading-tight">Nibbo: Reliable Delivery & Errands</h3>
            <p className="text-xs font-bold text-[#0F3D2E]">Nibbo Technologies Inc.</p>
            <p className="text-[10px] text-slate-400 mt-1">Contains ads · In-app purchases</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex justify-around py-2 border-b border-slate-100">
          <div className="text-center">
            <div className="text-sm font-bold flex items-center gap-1 justify-center">4.9 <Star className="w-3 h-3 fill-slate-900" /></div>
            <div className="text-[10px] text-slate-400">12k reviews</div>
          </div>
          <div className="w-px h-8 bg-slate-100"></div>
          <div className="text-center">
            <div className="text-sm font-bold">5M+</div>
            <div className="text-[10px] text-slate-400">Downloads</div>
          </div>
          <div className="w-px h-8 bg-slate-100"></div>
          <div className="text-center">
             <div className="text-sm font-bold">3+</div>
             <div className="text-[10px] text-slate-400">Rated for 3+</div>
          </div>
        </div>

        {/* Install Button */}
        <div className="p-4">
          <button className="w-full bg-[#0F3D2E] text-white py-2 rounded-lg font-bold text-sm shadow-md hover:opacity-90 transition-opacity">
            Install
          </button>
        </div>

        {/* Screenshots Section */}
        <div className="px-4 overflow-hidden">
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            <div className="flex-shrink-0 w-24 h-40 bg-orange-50 rounded-lg border border-orange-100 overflow-hidden relative">
               <div className="absolute top-2 left-2 text-[8px] font-black text-[#0F3D2E]">NÍBBO FOOD</div>
               <img src="https://picsum.photos/id/429/100/160" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="flex-shrink-0 w-24 h-40 bg-green-50 rounded-lg border border-green-100 overflow-hidden relative">
               <div className="absolute top-2 left-2 text-[8px] font-black text-[#0F3D2E]">NÍBBO ERRANDS</div>
               <img src="https://picsum.photos/id/292/100/160" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>

        {/* About App */}
        <div className="px-4 py-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900">About this app</h4>
            <Download className="w-4 h-4 text-slate-400" />
          </div>
          <p className="text-[10px] text-slate-600 mt-2 line-clamp-2">
            Experience the ultimate speed and reliability. Nibbo handles your errands and food deliveries in minutes...
          </p>
        </div>
      </div>
    </div>
  );
};
