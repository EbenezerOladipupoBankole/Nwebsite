
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { SmartAssistant } from './components/SmartAssistant';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { PlayStoreMockup } from './components/PlayStoreMockup';
import { ServicePage } from './components/ServicePage';
import { AboutPage } from './components/AboutPage';
import { ReferralPage } from './components/ReferralPage';
import { Truck, Store, Briefcase, ChevronRight, Gift, Bell, X, Sparkles, Tag, ShoppingBag, Info } from 'lucide-react';
import { Notification } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'referral' | string>('home');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'promo',
      title: 'Welcome to Nibbo!',
      message: 'Get 50% off your first delivery with code NIBBOFIRST.',
      timestamp: new Date(Date.now() - 3600000),
      read: false
    },
    {
      id: '2',
      type: 'system',
      title: 'Service Update',
      message: 'Nibbo Go is now available in Lekki Phase 1.',
      timestamp: new Date(Date.now() - 86400000),
      read: true
    }
  ]);
  const [activeToast, setActiveToast] = useState<Notification | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const addNotification = useCallback((notif: Notification) => {
    setNotifications(prev => [notif, ...prev]);
    setActiveToast(notif);
    setTimeout(() => setActiveToast(null), 6000);
  }, []);

  // Simulate real-time service updates every 2 minutes
  useEffect(() => {
    const services = [
      { title: "New: Nibbo Laundry", msg: "Fresh clothes, picked up and delivered. Try our premium laundry service today!" },
      { title: "Nibbo Pet Care is here!", msg: "From vet visits to pet shopping, we've got your furry friends covered in record time." },
      { title: "Introducing Nibbo Concierge", msg: "Bespoke gifting and personal shopping errands now available at your fingertips." },
      { title: "Nibbo Fuel Delivery", msg: "Skip the station. We'll bring the fuel to you. Now live in selected urban areas." }
    ];
    let count = 0;

    // Initial simulation after 10 seconds for user engagement
    const initialTimer = setTimeout(() => {
      const service = services[0];
      const firstNotif: Notification = {
        id: `service-init-${Date.now()}`,
        type: 'service',
        title: service.title,
        message: service.msg,
        timestamp: new Date(),
        read: false
      };
      addNotification(firstNotif);
      count = 1;
    }, 10000);

    // Continuous simulation every 2 minutes (120,000 ms)
    const interval = setInterval(() => {
      const service = services[count % services.length];
      const newNotif: Notification = {
        id: `service-${Date.now()}`,
        type: 'service',
        title: service.title,
        message: service.msg,
        timestamp: new Date(),
        read: false
      };
      addNotification(newNotif);
      count++;
    }, 120000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [addNotification]);

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleServiceSelect = (id: string) => {
    setCurrentView(id);
  };

  const handleAboutClick = () => {
    setCurrentView('about');
  };

  const handleReferClick = () => {
    setCurrentView('referral');
  };

  const handleGoHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header 
        onLogoClick={handleGoHome} 
        onAboutClick={handleAboutClick} 
        onServiceSelect={handleServiceSelect}
        notifications={notifications}
        onMarkAllAsRead={handleMarkAllAsRead}
        onClearNotifications={handleClearNotifications}
      />
      
      {/* Toast Notification Container */}
      <div className="fixed top-24 right-4 z-[70] w-full max-w-sm pointer-events-none px-4">
        {activeToast && (
          <div className="bg-white rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-5 flex gap-4 animate-in slide-in-from-right-full duration-500 pointer-events-auto">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
              activeToast.type === 'service' ? 'bg-purple-50 text-purple-600' :
              activeToast.type === 'promo' ? 'bg-orange-50 text-orange-600' :
              activeToast.type === 'order' ? 'bg-emerald-50 text-emerald-600' :
              'bg-blue-50 text-blue-600'
            }`}>
              {activeToast.type === 'service' ? <Sparkles className="w-6 h-6" /> :
               activeToast.type === 'promo' ? <Tag className="w-6 h-6" /> :
               activeToast.type === 'order' ? <ShoppingBag className="w-6 h-6" /> :
               <Bell className="w-6 h-6" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                 <h4 className="font-black text-slate-900 text-sm">{activeToast.title}</h4>
                 <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{activeToast.type}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{activeToast.message}</p>
            </div>
            <button onClick={() => setActiveToast(null)} className="p-1 hover:bg-slate-50 rounded-lg self-start transition-colors">
              <X className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        )}
      </div>

      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            
            <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div className="text-2xl font-black italic text-[#0F3D2E] cursor-default transition-transform hover:scale-110">BurgerKing</div>
                <div className="text-2xl font-black italic text-[#0F3D2E] cursor-default transition-transform hover:scale-110">Dominos</div>
                <div className="text-2xl font-black italic text-[#0F3D2E] cursor-default transition-transform hover:scale-110">SPAR</div>
                <div className="text-2xl font-black italic text-[#0F3D2E] cursor-default transition-transform hover:scale-110">MedPlus</div>
                <div className="text-2xl font-black italic text-[#0F3D2E] cursor-default transition-transform hover:scale-110">Shoprite</div>
              </div>
            </section>

            <ServicesGrid onServiceSelect={handleServiceSelect} />
            
            <SmartAssistant />

            {/* Refer a Friend Promo Section */}
            <section className="py-24 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group shadow-2xl shadow-orange-200">
                  <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none transition-transform group-hover:scale-110 duration-700">
                    <Gift className="w-96 h-96 text-white" />
                  </div>
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-bold backdrop-blur-md">
                         Exclusive Rewards
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-black leading-tight">Share Nibbo and get <br /> ₦2,000 for every friend.</h2>
                      <p className="text-xl text-orange-100/80 leading-relaxed max-w-md">Your friends get their first 3 deliveries free when they sign up with your link. It's a win-win.</p>
                      <button 
                        onClick={handleReferClick}
                        className="bg-white text-[#F7941D] px-10 py-5 rounded-3xl font-bold text-lg hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto"
                      >
                        Start Referring <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="hidden lg:flex justify-center">
                      <div className="relative">
                         <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-3xl animate-pulse"></div>
                         <Gift className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-white drop-shadow-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                  <h2 className="text-4xl lg:text-5xl font-black mb-6">Partner with the fastest</h2>
                  <p className="text-xl text-slate-400 max-w-2xl mx-auto">Join thousands of businesses and individuals growing their income with Nibbo.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: <Truck />, title: "Rider", text: "Become a Nibbo Champion. Earn competitive rates, choose your hours, and get paid weekly.", link: "Join the fleet" },
                    { icon: <Store />, title: "Merchant", text: "Grow your business. Reach thousands of new customers and manage orders with our powerful dashboard.", link: "Register store" },
                    { icon: <Briefcase />, title: "Business", text: "Enterprise logistics. Bulk deliveries, API integration, and dedicated account management.", link: "Nibbo for Business" }
                  ].map((p, i) => (
                    <div key={i} className="bg-slate-800/50 backdrop-blur-md p-10 rounded-[3rem] border border-slate-700 hover:border-[#F7941D] transition-all group cursor-pointer">
                       <div className="w-16 h-16 bg-[#F7941D]/10 rounded-2xl flex items-center justify-center text-[#F7941D] mb-8 group-hover:scale-110 transition-transform">
                          {React.cloneElement(p.icon as React.ReactElement, { className: 'w-8 h-8' })}
                       </div>
                       <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                       <p className="text-slate-400 leading-relaxed mb-8">{p.text}</p>
                       <div className="flex items-center gap-2 font-bold text-[#F7941D] group-hover:translate-x-2 transition-transform">
                          {p.link} <ChevronRight className="w-5 h-5" />
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Features />

            <section className="py-24 px-4 overflow-hidden">
              <div className="max-w-6xl mx-auto bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl relative border border-slate-100 group">
                 <div className="grid lg:grid-cols-2 gap-16 items-center">
                   <div className="text-center lg:text-left space-y-8">
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-[#F7941D] text-sm font-bold animate-pulse">
                        Now available on all platforms
                     </div>
                     <h2 className="text-4xl lg:text-6xl font-black text-[#0F3D2E] leading-tight">
                        Ready to experience <br /> Nibbo speed?
                     </h2>
                     <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
                        Join millions of users who rely on Nibbo for their daily essentials and tasks. Download now and get your first 3 deliveries for free.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                       <button className="bg-[#0F3D2E] text-white px-10 py-5 rounded-3xl font-bold text-lg hover:bg-slate-800 hover:shadow-2xl hover:shadow-green-900/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 group/btn">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_logo_black.svg" className="w-6 h-6 invert transition-transform duration-300 group-hover/btn:scale-110" alt="App Store" />
                          App Store
                       </button>
                       <button className="bg-white text-[#0F3D2E] border-2 border-[#0F3D2E] px-10 py-5 rounded-3xl font-bold text-lg hover:bg-slate-50 hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 group/btn">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" className="h-6 transition-transform duration-300 group-hover/btn:scale-110" alt="Play Store" />
                          Google Play
                       </button>
                     </div>
                   </div>

                   <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-green-100 rounded-full blur-[100px] opacity-40 transition-opacity duration-1000 group-hover:opacity-60"></div>
                      <PlayStoreMockup />
                   </div>
                 </div>
              </div>
            </section>
          </>
        )}
        {currentView === 'about' && (
          <AboutPage onBack={handleGoHome} />
        )}
        {currentView === 'referral' && (
          <ReferralPage onBack={handleGoHome} />
        )}
        {currentView !== 'home' && currentView !== 'about' && currentView !== 'referral' && (
          <ServicePage serviceId={currentView} onBack={handleGoHome} />
        )}
      </main>
      <Footer onAboutClick={handleAboutClick} onReferClick={handleReferClick} />
      
      {currentView === 'home' && (
        <button className="fixed bottom-8 right-8 z-[60] bg-[#0F3D2E] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-90 group">
           <Truck className="w-6 h-6 group-hover:animate-bounce" />
           <span className="absolute right-full mr-4 bg-white text-[#0F3D2E] py-2 px-4 rounded-xl shadow-lg font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Track active order</span>
        </button>
      )}
    </div>
  );
};

export default App;
