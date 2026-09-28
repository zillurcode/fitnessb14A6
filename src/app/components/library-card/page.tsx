import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Clock from '@/app/asset/Clock.png';
import burn from '@/app/asset/burn.png';
import Star from '@/app/asset/Star.png';
import { iCard } from '@/app/types/Type';
interface iCardProps{
  item:iCard
  
  
}


const LibraryCard = ({item}:iCardProps) => {
    return (
        <Link href={`/my-plan/${item.id}`}>
            <div>
                
    <div className="card   shadow-sm">
      <figure>
       <Image src={item.image} alt='card'
       width={400} 
       height={225}
       
       ></Image>
          
      </figure>
      <div className="card-body ">
        <div className=''>
           
        <div className="flex flex-wrap gap-2 text-gray-300">
    <button>{item.muscleGroups.map((group,index )=>{
      <span key={index} className="badge badge-secondary font-semibold"> 
      {group}
       </span>
    })}</button>
    </div>

            </div>
        <h2 className="card-title text-gray-100">
         {item.name}
         
        </h2>
        <p className=' text-gray-300'>
        {item.equipment}
        </p>
        
        <div className="card-actions justify-start">
          <div className="badge badge-outline  text-gray-300">
          <Image 
                src={Clock} 
                alt="duration icon" 
                width={16} 
                height={16}
                className="w-4 h-4 text-white opacity-80" 
            />
            {item.duration} min

          </div>

          <div className="badge badge-outline  text-gray-300">
          <Image 
                src={burn} 
                alt="duration icon" 
                width={16} // This is the base intrinsic size
                height={16}
                className="w-4 h-4 text-white opacity-80" // This is the displayed size (4 * 0.25rem = 1rem = 16px)
            />
            
            <div className=''>
            {item.caloriesBurned}kcal
            
            </div>
          
            </div>
            <div className='flex justify-between  text-gray-300'>
            <Image 
                src={Star} 
                alt="duration icon" 
                width={16} // This is the base intrinsic size
                height={16}
                className="w-4 h-4 text-white opacity-80" // This is the displayed size (4 * 0.25rem = 1rem = 16px)
            />
                
                <p>{item.rating}</p></div>

        </div>
      </div>
    </div>
            </div>
        </Link>
    );
};

export default LibraryCard ;