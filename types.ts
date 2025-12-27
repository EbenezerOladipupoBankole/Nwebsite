
import React from 'react';

export enum ServiceCategory {
  FOOD = 'Food',
  GROCERY = 'Grocery',
  PHARMACY = 'Pharmacy',
  ERRANDS = 'Errands',
  SHOPPING = 'Shopping'
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface ErrandPlan {
  steps: string[];
  estimatedTime: string;
  costEstimate: string;
  summary: string;
}

export type NotificationType = 'order' | 'promo' | 'system' | 'service';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}
