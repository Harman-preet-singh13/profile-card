import React from "react";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-50">
      <div className="h-[400px] w-[300px] bg-slate-200">
        <div className="mt-10 flex justify-center">
          <div className="bg-white text-white rounded-full w-20 h-20 animate-pulse"></div>
         
        </div>
        <div className="mt-10 flex flex-col gap-5 items-center">
            <div className="bg-white text-white rounded-full w-60 h-8 animate-pulse"></div>
          <div className="bg-white text-white rounded-full w-60 h-8 animate-pulse"></div>
          <div className="bg-white text-white rounded-full w-60 h-8 animate-pulse"></div>
        </div>
        
      </div>
    </div>
  );
}
