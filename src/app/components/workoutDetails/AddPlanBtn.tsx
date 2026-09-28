'use client'

import { PlanContext } from '@/context/PlansContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const AddPlanBtn = ({ myPlanData }: { myPlanData: any }) => {
    const { planList = [], setPlanList } = useContext(PlanContext) || {};
  
    const handleAddPlanBtn = () => {
     
      if (!myPlanData?.id) {
        toast.error('Workout data is missing or loading!');
        return;
      }
  
    
      const isAdded = planList?.some((item: any) => item?.id === myPlanData?.id);
  
      if (isAdded) {
        toast.error(`You have already added ${myPlanData?.name || 'this workout'}`);
      } else {
        if (setPlanList) {
          setPlanList([...planList, myPlanData]);
          toast.success(`You have added successfully ${myPlanData?.name || 'this workout'}`);
        } else {
          console.error('setPlanList is missing from PlanContext');
        }
      }
    };
  
    return (
      <div>
        <button 
          className="btn btn-success flex-1 text-xs font-bold text-black" 
          onClick={handleAddPlanBtn}
        >
          Add to today's plan
        </button>
      </div>
    );
  };
  
  export default AddPlanBtn;