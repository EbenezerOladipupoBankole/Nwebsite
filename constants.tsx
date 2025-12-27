
import React from 'react';
import { ShoppingBag, Utensils, Package, Pill, Truck, Zap, Monitor } from 'lucide-react';
import { ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'food',
    name: 'Nibbo Food',
    description: 'Get your favorite meals from top-rated restaurants delivered hot.',
    icon: <Utensils className="w-6 h-6" />,
    color: 'bg-orange-500'
  },
  {
    id: 'grocery',
    name: 'Nibbo Mart',
    description: 'Fresh groceries and household essentials in under 30 minutes.',
    icon: <ShoppingBag className="w-6 h-6" />,
    color: 'bg-green-600'
  },
  {
    id: 'errands',
    name: 'Nibbo Go',
    description: 'We run your errands. Pick up dry cleaning or mail packages.',
    icon: <Package className="w-6 h-6" />,
    color: 'bg-[#0F3D2E]'
  },
  {
    id: 'tech',
    name: 'Nibbo Tech',
    description: 'Premium gadget delivery, accessories, and tech support errands.',
    icon: <Monitor className="w-6 h-6" />,
    color: 'bg-slate-700'
  },
  {
    id: 'pharmacy',
    name: 'Nibbo Health',
    description: 'Prescriptions and wellness products delivered to your doorstep.',
    icon: <Pill className="w-6 h-6" />,
    color: 'bg-rose-500'
  }
];

export const FEATURES = [
  {
    title: 'Ultra Fast Delivery',
    description: 'Our lightning-fast riders ensure your items arrive in record time.',
    icon: <Zap className="w-6 h-6 text-yellow-500" />
  },
  {
    title: 'Real-time Tracking',
    description: 'Watch your delivery move on the map in real-time from store to door.',
    icon: <Truck className="w-6 h-6 text-blue-500" />
  }
];
