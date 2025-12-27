
import React from 'react';
import { FEATURES } from '../constants';
import { ShieldCheck, Clock, Smartphone, Gift } from 'lucide-react';

const FEATURE_LIST = [
  { icon: <ShieldCheck />, title: 'Insured Delivery', text: 'All Nibbo Go errands are fully insured for your peace of mind.' },
  { icon: <Clock />, title: 'On Time, Always', text: 'Our dispatch algorithm finds the fastest route to your door.' },
  { icon: <Smartphone />, title: 'Smart App', text: 'Manage all your needs through our sleek and intuitive mobile app.' },
  { icon: <Gift />, title: 'Nibbo Rewards', text: 'Earn points on every order and unlock exclusive discounts.' },
];

export const Features: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Built for Reliability</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We've reimagined logistics from the ground up to ensure Nibbo remains the most trusted name in delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURE_LIST.map((feat, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 nibbo-gradient rounded-[2rem] flex items-center justify-center text-white mx-auto mb-8 shadow-xl transform group-hover:rotate-6 transition-transform">
                {React.cloneElement(feat.icon as React.ReactElement, { className: 'w-10 h-10' })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feat.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
