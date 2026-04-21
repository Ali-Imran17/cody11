
"use client";

import { FiPhoneCall, FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import { TbSettings2 } from "react-icons/tb";
import { useState } from "react";

const codycommerce = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  
  return (
    <div className="relative min-h-screen transition-colors text-white font-sans selection:bg-orange-500/30 ">
    
      <div className="absolute inset-0 bg-[#4b1f00] bg-[repeating-linear-gradient(90deg,#5a2400_0px,#5a2400_60px,#4b1f00_60px,#4b1f00_120px)]">
      </div>

     
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.7)_75%,black_100%)]">
      </div>
      
      <div className="relative z-10">
      
        <section className="relative flex flex-col items-center pt-6 md:pt-10 px-4 ">
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 80px, #4a2b00 80px, #4a2b00 81px)' }}>
          </div>

         <Link href='/' className="absolute top-12 left-5  z-20 text-white font-black tracking-wide text-base sm:text-lg md:text-[18px] cursor-pointer">Cody's Commerce</Link>



    <nav className="
  z-50 relative md:mx-auto ml-auto 
  w-fit mt-4 md:mt-0 lg:mt-0
  bg-neutral-900 backdrop-blur-2xl 
  border border-white/30 
  px-4 md:px-8 py-2 sm:py-2.5 md:py-3 
  rounded-full mb-5 sm:mb-12 md:mb-16 
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
<section className="relative py-12 md:py-24 overflow-hidden px-4">

  

<div className="hidden lg:block xl:block absolute left-[15%]  lg:left-[23%] xl:left-[25%] -translate-x-1/2
 lg:top-38 xl:top-30  bottom-0 
  w-0.5 bg-[#FFE100] shadow-[0_0_25px_#facc15]
  md:h-[57%] lg:h-[60%] xl:h-[58%]" />
  <div className="relative max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-28 lg:space-y-40">

   
    <div className="relative flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">

      
     <div className="w-full lg:w-[60%] justify-center items-center lg:text-start px-4 lg:pr-12 order-2 sm:text-center lg:ml-60 "> 
      <h2 className="text-[#FFE100] drop-shadow-[0_0_1px_#facc15] text-lg sm:text-2xl font-semibold mb-4"> 
        Marketplace Mastery & Revenue Growth </h2>
          <p className="text-xs sm:text-sm text-white leading-relaxed mb-4">
    At Cody's Commerce, we don't just list your products; we dominate the digital shelf.
    We aggressively manage your presence across Amazon and top
    eCommerce channels to maximize visibility and revenue.
  </p>
   <div className="space-y-4 sm:space-y-5">
    {/* Bullet 1 - Conversion-Driven Content */}
    <div className="flex gap-2 sm:gap-3">
            <span className="text-[#FFE100] text-base sm:text-xl leading-6 sm:leading-7 flex-shrink-0">●</span>
      <p className="text-xs sm:text-sm text-white leading-relaxed">
        Conversion-Driven Content Our content team launches and
        upgrades your listings with precision. We optimize titles,
        bullets, and visual assets to match search algorithms,
        ensuring your products convert browsers into buyers on every
        platform.
      </p> </div> <div className="flex gap-2 sm:gap-3"> <span className="text-[#FFE100] text-base sm:text-xl leading-6 sm:leading-7 flex-shrink-0">●</span>
      <p className="text-xs sm:text-sm text-white leading-relaxed">
        Precision Advertising Our in-house advertising specialists 
        design targeted PPC campaigns aligned with your financial goals. We continuously optimize for ROI to accelerate sales 
        velocity and capture market share.
      </p>
      </div><div className="flex gap-2 sm:gap-3">
               <span className="text-[#FFE100] text-base sm:text-xl leading-6 sm:leading-7 flex-shrink-0">●</span>
      <p className="text-xs sm:text-sm text-white leading-relaxed">
        Brand Visibility Programs 
        Cody's Commerce goes beyond the buy box. We implement strategic marketing initiatives 
        designed to enhance your brand authority and ensure your products stand out wherever your customers are searching.
       </p> </div></div> </div>

   
<div className="hidden lg:block xl:block  absolute left-[15%] lg:left-[22.25%] xl:left-[23.75%] 2xl:left-[12.5%]  top-1/2 -translate-x-1/2 -translate-y-64 items-center justify-center">
  <div className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-[#231000] rounded-full z-0"></div>
  <div className="text-[#FFE100] drop-shadow-[0_0_8px_#facc15] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
    <TbSettings2 />
  </div>

</div>

    </div>

   
    <div className="relative flex flex-col lg:flex-row justify-center  items-center gap-6 sm:gap-8 lg:gap-12">

    
<div className="hidden lg:block xl:block  absolute left-[15%]  lg:left-[22.25%] xl:left-[23.75%] 2xl:left-[12.5%] top-1/2 -translate-x-1/2 -translate-y-80 items-center justify-center">
  <div className="relative flex items-center justify-center">

    <div className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-[#231000] rounded-full z-0"></div>

   
    <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400/20 blur-3xl rounded-full z-10"></div>

   
    <div className="relative z-20 text-[#FFE100] drop-shadow-[0_0_8px_#facc15] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
      <TbSettings2 />
    </div>
  </div>
</div>
     
    <div className="w-full lg:w-[60%] mb-20 justify-center items-center lg:text-start px-4 lg:pr-12 order-2 sm:text-center lg:ml-60">
  <h3 className="text-[#FFE100] drop-shadow-[0_0_1px_#facc15] text-lg sm:text-2xl font-semibold mb-4">
    Logistics, Fulfillment & Operations
  </h3>
  
  {/* Subheading styled paragraph */}
  <p className="text-xs sm:text-sm text-white leading-relaxed mb-4">
    At Cody's Commerce, we turn logistics into a competitive advantage. We ensure
    nationwide delivery that is fast, reliable, and consistent with
    the high standards your customers expect.
  </p>
  
  {/* Bullet points with proper styling */}
  <div className="space-y-4 sm:space-y-5">
    {/* Bullet 1 - Strategic Warehousing */}
    <div className="flex gap-2 sm:gap-3">
      <span className="text-[#FFE100] text-base sm:text-xl leading-6 sm:leading-7 flex-shrink-0">●</span>
      <p className="text-xs sm:text-sm text-white leading-relaxed">
        Strategic Warehousing Once we purchase your inventory,
        we take full responsibility for its storage and flow. We keep
        products organized and in-stock, ensuring immediate
        availability to prevent delays and missed sales opportunities.
      </p>
    </div>
    
    {/* Bullet 2 - Versatile Fulfillment Solutions */}
    <div className="flex gap-2 sm:gap-3">
      <span className="text-[#FFE100] text-base sm:text-xl leading-6 sm:leading-7 flex-shrink-0">●</span>
      <p className="text-xs sm:text-sm text-white leading-relaxed">
        Versatile Fulfillment Solutions We specialize in complexity. Whether shipping small parcels or oversized freight, our team
        handles rigorous prep, pack, and shipping protocols. We
        ensure every package meets strict marketplace compliance
        and arrives safely.
      </p>
    </div>
    
    {/* Bullet 3 - Full-Cycle Support & Returns */}
    <div className="flex gap-2 sm:gap-3">
      <span className="text-[#FFE100] text-base sm:text-xl leading-6 sm:leading-7 flex-shrink-0">●</span>
      <p className="text-xs sm:text-sm text-white leading-relaxed">
        Full-Cycle Support & Returns We manage the entire
        post-purchase experience. From efficient reverse logistics to
        responsive customer inquiries, Cody's Commerce ensures a
        hassle-free experience that protects your brand's reputation
        and seller rating.
      </p>
    </div>
  </div>
</div>
    </div>

   
    <div className="relative flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">

    
    <div className="w-full lg:w-[60%] -mt-20 justify-center items-center lg:text-start px-4 lg:pr-12 order-2 sm:text-center lg:ml-60">
  <h2 className="text-[#FFE100] drop-shadow-[0_0_1px_#facc15] text-lg sm:text-2xl font-semibold mb-4">
    Accelerated Expansion & Long-Term Value
  </h2>
  
  {/* Subheading styled paragraph */}
  <p className="text-xs sm:text-sm text-white leading-relaxed mb-4">
    At Cody's, growth isn't accidental — it's engineered. We drive your eCommerce
    expansion through high-level strategy and data intelligence, custom-tailored
    to capitalize on your brand's unique strengths and market dynamics.
  </p>
  
  {/* Bullet points with proper styling */}
  <div className="space-y-4 sm:space-y-5">
    {/* Bullet 1 */}
    <div className="flex gap-2 sm:gap-3">
      <span className="text-[#FFE100] text-base sm:text-xl leading-6 sm:leading-7 flex-shrink-0">●</span>
      <p className="text-xs sm:text-sm text-white leading-relaxed">
        Adaptive Market Intelligence We keep your brand ahead of
        the curve. By continuously monitoring sales channels for
        emerging trends and algorithm shifts, Cody's Commerce
        adapts your strategy in real-time. We identify opportunities the
        moment they arise to capture new market share.
      </p>
    </div>
    
    {/* Bullet 2 */}
    <div className="flex gap-2 sm:gap-3">
      <span className="text-[#FFE100] text-base sm:text-xl leading-6 sm:leading-7 flex-shrink-0">●</span>
      <p className="text-xs sm:text-sm text-white leading-relaxed">
        Dedicated Account Expertise Partnership is personal here.
        You are paired with a dedicated Account Manager who deeply
        understands your specific category and objectives. You get
        focused support, clear communication, and a strategic ally
        invested in your milestones.
      </p>
    </div>
    
    {/* Bullet 3 */}
    <div className="flex gap-2 sm:gap-3">
      <span className="text-[#FFE100] text-base sm:text-xl leading-6 sm:leading-7 flex-shrink-0">●</span>
      <p className="text-xs sm:text-sm text-white leading-relaxed">
        Exclusive Platform Opportunities Leverage our network for
        your gain. Our established relationships with major sales
        channels grant your brand access to exclusive beta programs,
        promotional slots, and high-visibility opportunities that aren't
        available to the general public.
      </p>
    </div>
  </div>
</div>

    
      
<div className="hidden lg:block xl:block absolute left-[15%] lg:left-[22.25%] xl:left-[23.75%] 2xl:left-[12.5%] top-1/2 -translate-x-1/2 -translate-y-80 items-center justify-center">
  <div className="relative flex items-center justify-center">
    {/* Circular background behind the icon */}
    <div className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-[#231000] rounded-full z-0"></div>
    {/* Icon on top */}
    <div className="relative z-20 text-[#FFE100] drop-shadow-[0_0_8px_#facc15] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
      <TbSettings2 />
    </div>
  </div>
</div>

  </div>
    
  </div>
  
</section>
  <div>
            <p className='text-white text-center tracking-widest text-sm mt-12 md:mt-50'>
              Partner with us today to transform your eCommerce strategy into <br className="hidden md:block"/> a scalable success story
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
         href={/iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent) ? "tel:+18457010551" : undefined}
         target="_blank"
         rel="noopener noreferrer"
         className="group relative flex items-center gap-3 bg-neutral-900 border border-white/20 p-3 sm:p-4 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8D28]"
         onClick={(e) => {
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
    
  );
};

export default codycommerce;