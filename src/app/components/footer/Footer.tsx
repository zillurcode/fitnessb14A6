import Link from 'next/link';
import Image  from 'next/image';
import logo from '@/app/asset/logo.png'
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0d0f12] text-gray-400 border-t border-gray-800/60 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
       
        <Link href="/" className="flex items-center gap-2.5 group">
         
          <div className="text-[#ccff00]">
            <Image src={logo} alt=''></Image>
          </div>
         
          <span className="text-white font-black tracking-wider text-lg uppercase">
            FITLOG
          </span>
        </Link>

       
        <div className="text-xs text-gray-400 font-normal tracking-wide text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </div>

      </div>
    </footer>
    );
};

export default Footer;