
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronRight, Bell, ShoppingBag, Tag, Info, Trash2, CheckCheck, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { Notification } from '../types';

interface HeaderProps {
  onLogoClick: () => void;
  onAboutClick: () => void;
  onServiceSelect: (id: string) => void;
  notifications: Notification[];
  onMarkAllAsRead: () => void;
  onClearNotifications: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onLogoClick, 
  onAboutClick, 
  onServiceSelect, 
  notifications,
  onMarkAllAsRead,
  onClearNotifications
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: 'Food', id: 'food' },
    { label: 'Mart', id: 'grocery' },
    { label: 'Nibbo Go', id: 'errands' },
    { label: 'Tech', id: 'tech' }
  ];

  const handleNavClick = (id: string) => {
    onServiceSelect(id);
    setMobileMenuOpen(false);
    setShowNotifications(false);
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'order': return <ShoppingBag className="w-4 h-4 text-emerald-500" />;
      case 'promo': return <Tag className="w-4 h-4 text-[#F7941D]" />;
      case 'service': return <Sparkles className="w-4 h-4 text-purple-500" />;
      default: return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-morphism py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button onClick={onLogoClick} className="hover:opacity-80 transition-opacity">
            <Logo />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={onAboutClick}
              className="text-sm font-bold text-slate-600 hover:text-[#F7941D] transition-all duration-300 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F7941D] transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <div className="h-4 w-px bg-slate-200"></div>

            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-bold text-slate-600 hover:text-[#F7941D] transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F7941D] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Notification Bell */}
            <div className="relative" ref={notificationRef}>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2.5 rounded-full transition-all relative ${showNotifications ? 'bg-[#0F3D2E] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-4 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-slate-900">Notifications</h3>
                      <p className="text-xs text-slate-500">Stay updated with Nibbo</p>
                    </div>
                    {notifications.length > 0 && (
                      <div className="flex gap-2">
                        <button 
                          onClick={onMarkAllAsRead}
                          title="Mark all as read"
                          className="p-2 hover:bg-white rounded-xl text-slate-400 hover:text-emerald-500 transition-colors"
                        >
                          <CheckCheck className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={onClearNotifications}
                          title="Clear all"
                          className="p-2 hover:bg-white rounded-xl text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="max-h-[400px] overflow-y-auto py-2">
                    {notifications.length > 0 ? (
                      notifications.map((notif) => (
                        <div 
                          key={notif.id}
                          className={`px-6 py-4 flex gap-4 hover:bg-slate-50 transition-colors relative cursor-pointer group ${!notif.read ? 'bg-orange-50/30' : ''}`}
                        >
                          {!notif.read && (
                            <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#F7941D] rounded-full"></div>
                          )}
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${!notif.read ? 'bg-white shadow-sm' : 'bg-slate-100'}`}>
                            {getIcon(notif.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-0.5">
                              <h4 className={`text-sm font-bold truncate ${!notif.read ? 'text-slate-900' : 'text-slate-600'}`}>{notif.title}</h4>
                              <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap ml-2">{formatTime(notif.timestamp)}</span>
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{notif.message}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-12 text-center">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Bell className="w-8 h-8 text-slate-200" />
                        </div>
                        <p className="text-slate-400 font-bold">All caught up!</p>
                        <p className="text-xs text-slate-400 mt-1">We'll notify you about updates here.</p>
                      </div>
                    )}
                  </div>
                  
                  {notifications.length > 0 && (
                    <button className="w-full p-4 text-center text-xs font-bold text-[#0F3D2E] hover:bg-slate-50 border-t border-slate-100 transition-colors">
                      View all activities
                    </button>
                  )}
                </div>
              )}
            </div>

            <button className="px-6 py-2.5 nibbo-gradient text-white rounded-full font-bold text-sm shadow-lg hover:shadow-orange-200 transition-all active:scale-95">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-slate-600"
              >
                <Bell className="w-6 h-6" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            <button onClick={onAboutClick} className="text-lg font-bold text-slate-900 py-2 border-b border-slate-50">About Us</button>
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-lg font-bold text-slate-900 py-2 border-b border-slate-50 text-left"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-4 nibbo-gradient text-white py-4 rounded-2xl font-bold shadow-xl">
              Sign In to Nibbo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
