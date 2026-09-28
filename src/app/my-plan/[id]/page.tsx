import { iCard } from '@/app/types/Type';
import React from 'react';
import Image from 'next/image';
import AddPlanBtn from '@/app/components/workoutDetails/AddPlanBtn';
import SavedPlans from '@/app/components/savedPlansList/SavedPlans';

interface iPlanDetailsPage {
    params: Promise<{
        id: string
    }>;
}

const libraryData = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
    return res.json();
};

const PlanDetailsPage = async ({ params }: iPlanDetailsPage) => {
    const { id } = await params;
    const data = await libraryData();
    
    
    const myPlanData = data.find((plan: iCard) => String(plan.id) === id);

    
    

    return (
        <div className="card lg:card-side bg-black shadow-xl container mx-auto rounded-3xl overflow-hidden p-6 gap-6 border border-gray-800">
  
  
  <div className="lg:w-1/2">
    <figure className="relative w-full h-[450px] lg:h-full rounded-2xl overflow-hidden">
      <Image 
        src={myPlanData.image} 
        alt={myPlanData.name || "Plan Image"} 
        fill 
        className="object-cover"
      />
    </figure>
  </div>
  

  <div className="lg:w-1/2 text-gray-300 flex flex-col justify-between p-2">
    <div className="card-body p-0 space-y-4">
     
      <div>
        <h2 className="card-title text-3xl font-extrabold text-white tracking-wider uppercase mb-2">
          {myPlanData.name}
        </h2>
        <p className="text-sm text-gray-400">{myPlanData.description}</p>
      </div>

     
      <div className="flex flex-wrap gap-2">
        {myPlanData.muscleGroups?.map((group, index) => (
          <span key={index} className="badge badge-success font-semibold text-xs px-3 py-2"> 
            {group}
          </span>
        ))}
      </div>

      
      <div className="space-y-2 text-sm border-t border-gray-800 pt-4 my-4">
        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-xs font-bold">Equipment</span>
          <span className="font-medium text-gray-200">{myPlanData.equipment}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-xs font-bold">Difficulty</span>
          <span className="font-medium text-gray-200">{myPlanData.difficulty}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-xs font-bold">Sets</span>
          <span className="font-medium text-gray-200">{myPlanData.sets}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-xs font-bold">Reps</span>
          <span className="font-medium text-gray-200">{myPlanData.reps}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-xs font-bold">Duration</span>
          <span className="font-medium text-gray-200">{myPlanData.duration} min</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-xs font-bold">Calories</span>
          <span className="font-medium text-gray-200">{myPlanData.caloriesBurned} kcal</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-xs font-bold">Rating</span>
          <span className="font-medium text-gray-200">{myPlanData.rating}</span>
        </div>
      </div>

      {/* Instructions Section */}
      <div className="pt-2">
        <h3 className="font-bold text-sm tracking-wider uppercase text-white mb-2">Instructions</h3>
        <ol className="list-decimal pl-5 space-y-1 text-xs text-gray-400">
          {Array.isArray(myPlanData.instructions) ? (
            myPlanData.instructions.map((step, index) => (
              <li key={index} className="leading-relaxed">{step}</li>
            ))
          ) : (
            <li>{myPlanData.instructions}</li>
          )}
        </ol>
      </div>

     
      <div className="card-actions flex gap-3 pt-6">
      <AddPlanBtn myPlanData={myPlanData} />
        <SavedPlans myPlanData={myPlanData} />
        
      </div>
    </div>
  </div>

</div>
    );
};

export default PlanDetailsPage;