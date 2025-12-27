import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, Smartphone, Gift } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onAboutClick: () => void;
  onReferClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAboutClick, onReferClick }) => {
  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2 space-y-8">
            <Logo className="invert brightness-200" />
            <p className="text-emerald-100/60 text-lg leading-relaxed max-w-sm">
              Making city life seamless. Premium delivery and errand services for the modern professional.
            </p>
            <div className="flex space-x-6">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-emerald-900 rounded-full text-emerald-200 hover:text-[#F7941D] hover:bg-emerald-800 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-[#F7941D]">Company</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li><button onClick={onAboutClick} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">About Us</button></li>
              <li><button onClick={onReferClick} className="flex items-center gap-2 hover:text-[#F7941D] hover:translate-x-1 transition-all duration-300 text-left"><Gift className="w-4 h-4" /> Refer a Friend</button></li>
              {['Careers', 'Sustainability', 'Nibbo for Business'].map(item => (
                <li key={item}><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-[#F7941D]">Services</h4>
            <ul className="space-y-4 text-emerald-100/60">
              {['Restaurants', 'Groceries', 'Errands', 'Concierge'].map(item => (
                <li key={item}><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-[#F7941D]">Support</h4>
            <ul className="space-y-4 text-emerald-100/60">
              {['Help Center', 'Safety', 'Contact Us', 'Legal'].map(item => (
                <li key={item}><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-[#F7941D]">Install App</h4>
            <div className="space-y-4">
               <button className="w-full bg-emerald-900 border border-emerald-800 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-emerald-800 hover:border-emerald-700 hover:scale-[1.02] transition-all duration-300 active:scale-95 group">
                 <Smartphone className="w-6 h-6 text-[#F7941D] group-hover:rotate-12 transition-transform duration-300" />
                 <div className="text-left">
                   <div className="text-[10px] uppercase text-emerald-300 font-bold">Download on</div>
                   <div className="text-sm font-bold">App Store</div>
                 </div>
               </button>
               <button className="w-full bg-emerald-900 border border-emerald-800 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-emerald-800 hover:border-emerald-700 hover:scale-[1.02] transition-all duration-300 active:scale-95 group">
                 <Smartphone className="w-6 h-6 text-[#F7941D] group-hover:rotate-12 transition-transform duration-300" />
                 <div className="text-left">
                   <div className="text-[10px] uppercase text-emerald-300 font-bold">Get it on</div>
                   <div className="text-sm font-bold">Google Play</div>
                 </div>
               </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-emerald-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-100/40 text-sm">© 2024 Nibbo Technologies Inc. All rights reserved.</p>
          <div className="flex space-x-8 text-sm text-emerald-100/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
