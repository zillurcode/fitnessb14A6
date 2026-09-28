

import Image from "next/image";
import logo from '@/app/asset/logo.png'
import Link from "next/link";
import NavbarCounts from "./NavbarCounts";



const Navbar = () => {
 
  
    return (
      <section className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="navbar container mx-auto px-4 bg-black text-white">
        
       
        <div className="navbar-start flex items-center gap-2">
         
          <div className="dropdown lg:hidden">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost btn-circle text-white"
            >
              <svg 
                aria-label="Menu" 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              > 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /> 
              </svg>
            </div>
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-zinc-900 border border-zinc-800 rounded-box z-50 mt-3 w-52 p-3 shadow-lg"
            >
              <li>
                <Link href="/" className="font-semibold text-[#C2F800] hover:bg-zinc-800">
                  Workouts
                </Link>
              </li>
              <li>
                <Link href="/listedPlans" className="font-semibold text-gray-400 hover:bg-zinc-800 hover:text-white">
                  My Plan
                </Link>
              </li>
              <li>
                <Link href="/listedPlans" className="font-semibold text-gray-400 hover:bg-zinc-800 hover:text-white">
                  Saved
                </Link>
              </li>
            </ul>
          </div>

         
          <Link href="/" className="flex items-center gap-2 btn btn-ghost text-xl text-white normal-case px-2">
           
            <Image src={logo} alt="FITLOG Logo" width={32} height={32} />
            <span className="font-bold tracking-wider">FITLOG</span>
          </Link>
        </div>

       
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <Link href="/" className="font-semibold text-[#C2F800] hover:text-[#C2F800]">
                Workouts
              </Link>
            </li>
            <li>
              <Link href="/listedPlans" className="font-semibold text-gray-400 hover:text-white">
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Actions */}
        <div className="navbar-end gap-3">
        <Link href='/listedPlans'> <NavbarCounts></NavbarCounts> </Link>
        <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
         
       
    
        
          </div>
        </div>

      </div>
    </section>
    );
};

export default Navbar;