'use client'

import { PlanContext } from '@/context/PlansContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import LibraryCard from '../components/library-card/page';

const ListedPlanPage = () => {
  const { planList = [], savedPlan = [] } = useContext(PlanContext) || {};
  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  const [sortBy, setSortBy] = useState<'duration'| 'calories' |'ratings'>('Duration');


  const currentList = activeTab === 'today' ? planList : savedPlan;

  
  const totalMinutes = planList.reduce((acc: number, curr: any) => acc + (Number(curr.duration) || 0), 0);
  const totalCalories = planList.reduce((acc: number, curr: any) => acc + (Number(curr.caloriesBurned) || 0), 0);

  
  const sortedList = [...currentList].sort((a: any, b: any) => {
    if (sortBy === 'Duration') return (Number(b.duration) || 0) - (Number(a.duration) || 0);
    if (sortBy === 'Calories') return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
    if (sortBy === 'Ratings') return (Number(b.rating) || 0) - (Number(a.rating) || 0);
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white font-sans flex flex-col justify-between">
      
      {/* 1. Header / Navbar */}
      <header className="border-b border-gray-800/80 bg-[#0d0f12] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
         

          {/* Center Links */}
          <nav className="flex items-center gap-2 bg-[#13161c] p-1 rounded-full border border-gray-800">
            <Link
              href="/library"
              className="px-4 py-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-all"
            >
              Workouts
            </Link>
            <span className="px-4 py-1.5 text-xs font-bold bg-[#1e232d] text-[#ccff00] rounded-full shadow">
              My Plan
            </span>
          </nav>

         
        

        </div>
      </header>

     
      <main className="max-w-6xl mx-auto px-6 py-8 w-full space-y-8 flex-1">
        
        
        <div>
          <h1 className="text-3xl font-black uppercase tracking-wide text-white">MY PLAN</h1>
          <p className="text-gray-400 text-xs mt-1">Cap of five lifts for today. Finish them, then load more.</p>
        </div>

       
        <div className="bg-[#13161c] border border-gray-800/80 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          <div className="flex flex-col space-y-1 md:pr-8">
            <span className="text-xs text-gray-400 font-medium">Exercises</span>
            <span className="text-4xl font-black text-[#ccff00]">{planList.length}</span>
          </div>

          <div className="flex flex-col space-y-1 pt-4 md:pt-0 md:px-8">
            <span className="text-xs text-gray-400 font-medium">Minutes</span>
            <span className="text-4xl font-black text-white">{totalMinutes}</span>
          </div>

          <div className="flex flex-col space-y-1 pt-4 md:pt-0 md:pl-8">
            <span className="text-xs text-gray-400 font-medium">Calories</span>
            <span className="text-4xl font-black text-white">{totalCalories}</span>
          </div>
        </div>

     
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          
          {/* Active Tabs */}
          <div className="bg-[#13161c] p-1.5 rounded-xl border border-gray-800/80 flex items-center gap-1">
            <button
              onClick={() => setActiveTab('today')}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'today'
                  ? 'bg-[#1e232d] text-white shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'saved'
                  ? 'bg-[#1e232d] text-white shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-gray-400">Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#13161c] border border-gray-800 text-white text-xs font-medium rounded-xl px-4 py-2 pr-8 appearance-none focus:outline-none focus:border-gray-600 cursor-pointer"
              >
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
                <option value="Ratings">Ratings</option>
              </select>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
            </div>
          </div>

        </div>

       
        {sortedList.length > 0 ? (
          <div className="flex flex-col gap-4">
            {sortedList.map((plan: any, index: number) => (
              <LibraryCard key={plan.id || plan.planId || index} item={plan} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-gray-800/80 rounded-2xl bg-[#0d0f12] py-20 px-6 flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-xl font-black uppercase tracking-wide text-white">NOTHING HERE YET</h2>
            <p className="text-xs text-gray-400 max-w-sm">Browse the library and add a lift to get today moving.</p>
            <Link
              href="/library"
              className="mt-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:scale-105"
            >
              Go to workouts
            </Link>
         
          </div>
        )}
      

      </main>

      
     

    </div>
  );
};

export default ListedPlanPage;