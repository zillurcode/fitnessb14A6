'use client'

import React, { ReactNode, useState, useEffect, createContext } from 'react';
import { iCard } from '@/app/types/Type';

interface PlanContextType {
  planList: iCard[];
  setPlanList: React.Dispatch<React.SetStateAction<iCard[]>>;
  savedPlan: iCard[];
  setSavedPlan: React.Dispatch<React.SetStateAction<iCard[]>>;
}

export const PlanContext = createContext<PlanContextType | null>(null);

const PlansProvider = ({ children }: { children: ReactNode }) => {
  const [planList, setPlanList] = useState<iCard[]>([]);
  const [savedPlan, setSavedPlan] = useState<iCard[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

 
  useEffect(() => {
    try {
      const localPlanList = localStorage.getItem('fitlog_planList');
      const localSavedPlan = localStorage.getItem('fitlog_savedPlan');

      if (localPlanList) setPlanList(JSON.parse(localPlanList));
      if (localSavedPlan) setSavedPlan(JSON.parse(localSavedPlan));
    } catch (error) {
      console.error('Failed to parse localStorage data:', error);
    } finally {
      setIsInitialized(true); 
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('fitlog_planList', JSON.stringify(planList));
    }
  }, [planList, isInitialized]);

  
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('fitlog_savedPlan', JSON.stringify(savedPlan));
    }
  }, [savedPlan, isInitialized]);

  const sharedData = {
    planList,
    setPlanList,
    savedPlan,
    setSavedPlan,
  };

  return (
    <PlanContext.Provider value={sharedData}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlansProvider;