
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-1.5 relative ${className}`}>
      <div className="flex flex-col">
        <span className="text-2xl font-[900] tracking-tighter text-[#0F3D2E] leading-none">
          NÍBBO
        </span>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#F7941D] to-transparent opacity-40"></div>
      </div>
      <div className="relative flex items-center justify-center">
         {/* Location Pin Icon replicating the logo */}
         <svg width="28" height="34" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12C0 21 12 30 12 30C12 30 24 21 24 12C24 5.37 18.63 0 12 0Z" fill="#F7941D"/>
            <circle cx="12" cy="11" r="7" fill="white"/>
            {/* Winding road detail inside pin */}
            <path d="M10 15C10 15 11 13 13 13C15 13 14 11 12 11C10 11 9 9 11 9C13 9 14 7 14 7" stroke="#F7941D" strokeWidth="1.5" strokeLinecap="round"/>
         </svg>
         {/* Orange swoosh line below logo text */}
         <div className="absolute -bottom-2 -left-20 w-32 h-4 border-b-2 border-[#F7941D] rounded-[50%] opacity-60"></div>
      </div>
    </div>
  );
};
