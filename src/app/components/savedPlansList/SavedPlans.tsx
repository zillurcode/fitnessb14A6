'use client'

import { PlanContext } from '@/context/PlansContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SavedPlans = ({myPlanData}) => {
    const { savedPlan,setSavedPlan} = useContext(PlanContext)
       
       const handleSavedPlanBtn =()=>{
        const isSaved = savedPlan?.some((item: any) => item?.id === myPlanData?.id);

        if (isSaved) {
            toast.error(`You have already saved ${myPlanData?.name || 'this workout'}`);
          } else {
            setSavedPlan([...(savedPlan || []), myPlanData]);
            toast.success(`You have saved ${myPlanData?.name || 'this workout'}`);
          }
           
           
           
   
       }
   return (
       <div>
           <button className="btn btn-outline border-gray-700 text-gray-300 hover:bg-gray-800 flex-1 text-xs font-bold" onClick={()=> handleSavedPlanBtn()}>
         Save for later
       </button>
       </div>
   );
};

export default SavedPlans;