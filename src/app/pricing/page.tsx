"use client";

import { FiPhoneCall, FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import { MdDoNotDisturbOn } from "react-icons/md";
import { FaCheck } from 'react-icons/fa'
import { useState } from "react";


const pricing = () => {
  
  const [copySuccess, setCopySuccess] = useState(false); 

  return (
    <div className="relative min-h-screen transition-colors text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
    
      <div className="absolute inset-0 bg-[#4b1f00] 
        bg-[repeating-linear-gradient(90deg,#5a2400_0px,#5a2400_60px,#4b1f00_60px,#4b1f00_120px)]">
      </div>
   

      <div className="absolute inset-0
        bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.7)_75%,black_100%)]">
      </div>
      <div className="relative z-10">

     <section className="relative flex flex-col items-center pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-4 ">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 80px, #4a2b00 80px, #4a2b00 81px)' }}>
        </div>
        <div className="absolute inset-0 "></div>

        <Link href='/' className="absolute top-12 left-5  z-20 text-white font-black tracking-wide text-base sm:text-lg md:text-[18px] cursor-pointer">Cody's Commerce</Link>


    <nav className="
  z-50 relative md:mx-auto ml-auto 
  w-fit mt-6 md:mt-0 lg:mt-0
  bg-neutral-900 backdrop-blur-2xl 
  border border-white/30 
  px-4 md:px-8 py-2 sm:py-2.5 md:py-3 
  rounded-full mb-8 sm:mb-12 md:mb-16 
  shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]
">

  <input type="checkbox" id="menu-toggle" className="hidden peer" />

  <div className="flex justify-between items-center">
    
   
    <ul className="hidden lg:flex gap-6 md:gap-8 text-sm font-bold tracking-wide text-white">
      <Link href='/' className='hover:text-[#ff8d28]'>Home</Link>
      <Link href='/aboutus' className='hover:text-[#ff8d28]'>About</Link>
      <Link href='/codycommerce' className='hover:text-[#ff8d28]'>Cody's Commerce</Link>
      <Link href='/pricing' className='hover:text-[#ff8d28]'>Pricing</Link>
      <Link href='/contact' className='hover:text-[#ff8d28]'>Contact</Link>
    </ul>

    <label 
      htmlFor="menu-toggle" 
      className="md:block lg:hidden ml-auto  text-white cursor-pointer"
    >
      ☰
    </label>

  </div>


  <div className="
    absolute right-0 top-14 sm:top-16   
    w-52 
    bg-neutral-900 
    border border-white/20 
    rounded-2xl p-6 
    flex-col gap-4 text-white 
    hidden peer-checked:flex lg:hidden
  ">
    <Link href='/' className='hover:text-[#ff8d28]'>Home</Link>
    <Link href='/aboutus' className='hover:text-[#ff8d28]'>About</Link>
    <Link href='/codycommerce' className='hover:text-[#ff8d28]'>Cody's Commerce</Link>
    <Link href='/pricing' className='hover:text-[#ff8d28]'>Pricing</Link>
    <Link href='/contact' className='hover:text-[#ff8d28]'>Contact</Link>
  </div>

</nav>
</section>

 <div className="mt-6 sm:mt-8 md:mt-10 text-center px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl drop-shadow-amber-600/40 drop-shadow-lg font-medium text-[#FF8D28]">COST is NON Existent</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl mt-1 sm:mt-2 px-2">The reality is, you profit from us.<br className="block sm:hidden"/> We are dead serious about this model.<br/>Dive into the logistics in the section that follows.</p>
</div>
 <div className="mt-6 sm:mt-8 md:mt-10 text-center px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl drop-shadow-amber-600/40 drop-shadow-lg font-medium text-[#FF8D28]">Rise Above the Chaos</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl mt-1 sm:mt-2 px-2">The reason our framework provides <br className="block sm:hidden"/> superior results compared to<br/>alternative platforms.</p>
</div>

   <div className="
  w-full
  max-w-6xl
  mx-auto

  mt-6 sm:mt-8 md:mt-12 lg:mt-16

  p-1

  flex items-center justify-center

  rounded-4xl sm:rounded-3xl md:rounded-4xl

  border border-white/20 border-b-[#EEFF00]/40

  shadow-[inset_0_-10px_30px_rgba(96,40,9,0.5)]

  bg-gradient-to-b from-[#121212] to-[#2e1111]

  min-h-[150px] sm:min-h-[200px] md:min-h-[250px]
">
      <div className="w-full max-w-6xl">
     
        <div className="relative p-[2px] rounded-4xl border shadow-[inset_0_-10px_30px_rgba(96,40,9,5)] border-b-[#EEFF00]/40 border-white/20 bg-linear-to-b from-[#121212] to-[#2e1111] shadow-2xl">
          
        
          <div className="relative rounded-[28px] bg-linear-to-b from-[#121212] to-[#2e1111] overflow-hidden">
            
           
          <div className="absolute left-[22%] sm:left-[21%] top-0 bottom-0 w-[20%] sm:w-[20%] z-20 pointer-events-none">
  <div className="h-full flex flex-col rounded-2xl bg-gradient-to-b from-[#F27507] to-[#5E2F06] border border-yellow-300/60 shadow-[0_0_25px_rgba(255,200,0,0.25),inset_0_-10px_25px_rgba(0,0,0,0.4)]">

    <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 text-center px-2 border-b border-black/40">
      <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
        Cody Commerce<br />Partnership
      </h3>
    </div>

   
    {[
      3, // Strategic
  
    ].map((count, i) => (
      <div
        key={i}
        className="flex-1 flex flex-col items-center justify-center border-b border-black/40 gap-8 sm:gap-10 md:gap-10 lg:gap-16 lg:mt-10 mt-5"
      >
        {[...Array(count)].map((_, j) => (
          <div
            key={j}
            className="flex items-center justify-center gap-1 text-white text-[10px] sm:text-xs md:text-sm"
          >
            <span className="text-yellow-300 drop-shadow-[0_0_6px_#FFE100]">✔</span>
            <span>Yes</span>
          </div>
        ))}
      </div>
    ))}
       {[
      3, // Sales & Brand Control
   
    ].map((count, i) => (
      <div
        key={i}
        className="flex-1 flex flex-col items-center justify-center border-b border-black/40 gap-8 sm:gap-10 md:gap-10 lg:gap-16  mb-2 sm:mb-3 md:mb-5 "
      >
        {[...Array(count)].map((_, j) => (
          <div
            key={j}
            className="flex items-center justify-center gap-1 text-white text-[10px] sm:text-xs md:text-sm"
          >
            <span className="text-yellow-300 drop-shadow-[0_0_6px_#FFE100]">✔</span>
            <span>Yes</span>
          </div>
        ))}
      </div>
    ))}
       {[
      3, // Fulfillment & Logistics
   
    ].map((count, i) => (
      <div
        key={i}
        className="flex-1 flex flex-col items-center justify-center border-b border-black/40 gap-8 sm:gap-10 md:gap-10 lg:gap-16 lg:mb-15 mb-7"
      >
        {[...Array(count)].map((_, j) => (
          <div
            key={j}
            className="flex items-center justify-center gap-1 text-white text-[10px] sm:text-xs md:text-sm"
          >
            <span className="text-yellow-300 drop-shadow-[0_0_6px_#FFE100]">✔</span>
            <span>Yes</span>
          </div>
        ))}
      </div>
    ))}
       {[
      4, // ecosystem

    ].map((count, i) => (
      <div
        key={i}
        className="flex-1 flex flex-col items-center justify-center  gap-8 sm:gap-10 md:gap-10 lg:gap-16 lg:mb-8 mb-2"
      >
        {[...Array(count)].map((_, j) => (
          <div
            key={j}
            className="flex items-center justify-center gap-1 text-white text-[10px] sm:text-xs md:text-sm"
          >
            <span className="text-yellow-300 drop-shadow-[0_0_6px_#FFE100]">✔</span>
            <span>Yes</span>
          </div>
        ))}
      </div>
    ))}

  </div>
</div>

            
            <div className="relative z-0 p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8">
              
           
              <div className="grid grid-cols-5 gap-0 mb-0 border-b border-white/10">
                <div className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 border-r border-white/10"></div>
                
               
                <div className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24"></div>
                
               
                <div className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 flex items-center justify-center border-r border-white/10">
                  <h3 className="text-gray-400 text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-xl text-center px-1 sm:px-2 leading-tight">
                    3P Vendor<br />Central
                  </h3>
                </div>
                
             
                <div className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 flex items-center justify-center border-r border-white/10">
                  <h3 className="text-gray-400 text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-xl text-center px-1 sm:px-2 leading-tight">
                    Traditional 3P<br />Resellers
                  </h3>
                </div>
                
              
                <div className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 flex items-center justify-center">
                  <h3 className="text-gray-400 text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-xl text-center px-1 sm:px-2 leading-tight">
                    In House
                  </h3>
                </div>
              </div>

         
              <div className="border-b border-gray-700/50">
               
                <div className="grid grid-cols-5 gap-0">
                  <div className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 md:px-3 border-r border-gray-700/50">
                    <h4 className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg leading-tight">
                      Strategic<br />Guidance
                    </h4>
                  </div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div></div>
                </div>

              
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">High Level Growth Strategy</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

              
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">1:1 <br />Dedicated Expert</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">Strict MAP Compliance</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>
              </div>

             
              <div className="border-b border-gray-700/50">
            
                <div className="grid grid-cols-5 gap-0">
                  <div className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 md:px-3 border-r border-gray-700/50">
                    <h4 className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg leading-tight">
                      Sales & Brand<br />Control
                    </h4>
                  </div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div></div>
                </div>

                
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">Complete Catalog Optimization</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

              
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">High Volume Purchase Order</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

             
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">Full Data Transparency</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>
              </div>

           
              <div className="border-b border-gray-700/50">
             
                <div className="grid grid-cols-5 gap-0">
                  <div className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 md:px-3 border-r border-gray-700/50">
                    <h4 className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg leading-tight">
                      Fulfillment &<br />Logistics
                    </h4>
                  </div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div></div>
                </div>

              
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">Custom Prep & Labeling</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>
  
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">Accelerated Prime Delivery</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

              
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">End to End Returns Management</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>
              </div>

          
              <div>
                {/* Section Header */}
                <div className="grid grid-cols-5 gap-0">
                  <div className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 md:px-3 border-r border-gray-700/50">
                    <h4 className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg leading-tight">
                      Ecosystem<br />Protection
                    </h4>
                  </div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div></div>
                </div>

               
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">Strict Platform Compliance</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

              
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">Listing Hijacker Protection</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

               
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">Proactive Account Health</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1 border-r border-gray-700/50">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

              
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50 h-12 sm:h-14 md:h-16 lg:h-20">
                  <div className="py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 flex items-center">
                    <p className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">Advance PPC & Scaling</p>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 bg-gradient-to-br from-orange-500/10 to-transparent gap-0.5 sm:gap-1">
                    <FaCheck className="text-[8px] sm:text-[10px] md:text-xs text-orange-400" />
                    <span className="text-orange-400 font-medium text-[8px] sm:text-[10px] md:text-xs">Yes</span>
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-1.5 sm:py-2 md:py-2.5 flex items-center text-gray-500 text-base sm:text-lg md:text-xl justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
        
    </div>
<div className="flex justify-center items-center w-full">
  <p className='text-white text-center tracking-widest text-[10px] sm:text-xs md:text-sm mt-8 sm:mt-10 md:mt-12 lg:mt-16 px-4'>
    Partner with us today to transform your eCommerce strategy into <br className="hidden sm:block"/> a scalable success story
  </p>
</div>
   <footer className="py-12 sm:py-16 md:py-20 mt-2 sm:mt-4 px-4">

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">

   
   <div className="space-y-4 sm:space-y-5 w-full sm:col-span-2 md:col-span-1">
   
        
         <a
           href="https://mail.google.com/mail/?view=cm&fs=1&to=zcody1@codyscommerce.com&su=&body=Hi there"
     target="_blank"
     rel="noopener noreferrer"
           className="group relative flex items-center gap-3 bg-neutral-900 border border-white/20 p-3 sm:p-4 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8D28]"
         >
           
           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-gradient-to-r from-[#FF8D28]/20 via-orange-500/10 to-transparent"></div>
   
          
           <div className="relative z-10 flex items-center gap-3 w-full">
             <div className="text-[#FF8D28] text-xl sm:text-2xl">
               <CiMail />
             </div>
             <span className="text-sm sm:text-base text-gray-300">
              zcody1@codyscommerce.com
             </span>
           </div>
         </a>
   
        <a
  href={(() => {
    if (typeof window !== 'undefined' && /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
      return "tel:+18457010551";
    }
    return undefined;
  })()}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative flex items-center gap-3 bg-neutral-900 border border-white/20 p-3 sm:p-4 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8D28]"
  onClick={(e) => {
    if (typeof window === 'undefined') return;
    
    const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText("+1 845-701-0551").then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
      });
    }
  }}
>
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-gradient-to-r from-[#FF8D28]/20 via-orange-500/10 to-transparent"></div>
  <div className="relative z-10 flex items-center justify-between gap-3 w-full">
    <div className="flex items-center gap-3">
      <div className="text-[#FF8D28] text-xl sm:text-2xl">
        <FiPhoneCall />
      </div>
      <span className="text-sm sm:text-base text-gray-300">
        +1 845-701-0551
      </span>
    </div>
    {/* Copy icon - visible only on desktop */}
    <div className="hidden lg:flex items-center gap-1 text-gray-400 group-hover:text-[#FF8D28] transition-colors">
      {copySuccess ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-[#FF8D28]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-xs text-[#FF8D28] hidden sm:inline">Copied!</span>
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="text-xs hidden sm:inline">Copy</span>
        </>
      )}
    </div>
  </div>
</a>
         
         {/* Toast notification for copy success */}
         {copySuccess && (
           <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-[#FF8D28] border border-[#FF8D28]
            font-medium px-4 py-2 rounded-lg text-sm z-50 ease-in-out duration-700">
             Phone number copied to clipboard!
           </div>
         )}
   
       </div>

 
    <div className="text-center md:text-left">
      <h4 className="text-[#FF8D28] font-bold mb-4 sm:mb-5 tracking-widest text-lg sm:text-xl md:text-2xl">
        Quick Links
      </h4>

      <div className="space-y-2 text-sm sm:text-base font-bold text-white flex flex-col items-center md:items-start">
        <Link href='/aboutus' className="hover:text-[#ff8d28] transition-colors">About Us</Link>
        <Link href='/codycommerce' className="hover:text-[#ff8d28] transition-colors">Cody's Commerce</Link>
        <Link href='/pricing' className="hover:text-[#ff8d28] transition-colors">Pricing</Link>
        <Link href='/contact' className="hover:text-[#ff8d28] transition-colors">Contact</Link>
      </div>
    </div>

   
    <div className="flex justify-center md:justify-start items-center md:items-start">
      <Link 
        href='https://www.linkedin.com/in/zachary-cody-11b0381a4/'
        target="_blank"
        className='hover:text-white transition-all duration-300 hover:scale-110 text-[#FF8D28]'
      >
        <FiLinkedin size={32} className="sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px]" />
      </Link>
    </div>

  </div>

 
  <div className="w-full mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto border-t border-[#7B7878]"></div>

</footer>
</div>

</div>

  )
}

export default pricing