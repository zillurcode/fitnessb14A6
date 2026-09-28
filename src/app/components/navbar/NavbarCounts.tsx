'use client'

import { useContext } from "react";
import { PlanContext } from "@/context/PlansContext";

const NavbarCounts = () => {
  const { planList, savedPlan } = useContext(PlanContext);

  return (
    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
      <button className="text-gray-300">
        <span className="flex items-center gap-1.5">
          Plan 
          <span className="text-white font-extrabold px-2 py-0.5 rounded-full text-[10px]">
            {planList?.length || 0}
          </span>
        </span>
      </button>

      <button className="text-gray-300">
        <span className="flex items-center gap-1.5">
          Saved 
          <span className="bg-[#1e232d] text-white font-extrabold px-2 py-0.5 rounded-full text-[10px] border border-gray-700">
            {savedPlan?.length || 0}
          </span>
        </span>
      </button>
    </div>
  );
};

export default NavbarCounts;
