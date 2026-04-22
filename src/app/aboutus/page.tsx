"use client";

import { FiPhoneCall, FiLinkedin, FiChevronDown } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";

const faqData = [
  {
    question: "Which marketplaces do you operate on?",
    answer: "We primarily operate on Amazon, along with other major online marketplaces and retail distribution networks depending on the brand’s requirements."
  },
  {
    question: "Do you work with international brands?",
    answer: "Yes, we partner with both local and international brands looking to expand into new markets through reliable distribution and e-commerce strategies."
  },
  {
    question: "What are the benefits of working with you?",
    answer: "Increased online visibility Access to established distribution networks Professional Amazon account management Scalable sales growth Brand protection and consistency."
  },
  {
    question: "Do you require exclusivity?",
    answer: "Exclusivity depends on the brand and agreement terms. We are flexible and open to discussing mutually beneficial arrangements."
  },
  {
    question: "How do you ensure brand protection on Amazon?",
    answer: "We follow strict compliance policies, maintain MAP pricing where applicable, and work closely with brands to protect their identity and reputation."
  },
  {
    question: "Can I track my brand's performance?",
    answer: "Yes, we provide regular reports and insights on sales, performance, and growth."
  },
  {
    question: "What makes you different from other sellers?",
    answer: "We focus on long-term brand building, authorized partnerships, and data-driven growth strategies rather than short-term reselling."
  },
  {
    question: "Why should I trust you with my brand?",
    answer: "We have experience managing multiple brands, proven sales performance, and a strong supply chain network that ensures sustainable growth."
  },
  {
    question: "Do you already work with established brands?",
    answer: "Yes, we currently manage and distribute multiple brands across different categories, with a growing portfolio and proven results."
  },
];

export default function aboutus() {
  // ✅ MOVED useState INSIDE the component function (correct placement)
  const [copySuccess, setCopySuccess] = useState(false);

  return (
    <div className="relative min-h-screen transition-colors text-white font-sans selection:bg-orange-500/30 ">
    
      <div className="absolute inset-0 bg-[#4b1f00] 
        bg-[repeating-linear-gradient(90deg,#5a2400_0px,#5a2400_60px,#4b1f00_60px,#4b1f00_120px)]">
      </div>
   

      <div className="absolute inset-0
        bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.7)_75%,black_100%)]">
      </div>
      <div className="relative z-10">

   <section className="relative  flex flex-col items-center pt-10 px-4 ">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 80px, #4a2b00 80px, #4a2b00 81px)' }}>
        </div>
        <div className="absolute inset-0 "></div>

         <Link href='/' className="absolute top-12 left-5  z-20 text-white font-black tracking-wide text-base sm:text-lg md:text-[18px] cursor-pointer">Cody's Commerce</Link>


    <nav className="
  z-50 relative md:mx-auto ml-auto 
  w-fit
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

        <section className="pt-10 md:pt-20 pb-10 md:pb-30 px-4 text-center">
  
  <div className="max-w-4xl mx-auto rounded-3xl md:rounded-[2rem] 
    overflow-hidden border border-white/10 shadow-2xl relative">

   
    <Image 
      src="/business-people-working-together-office-business-team-working-together-business-people-working-together_980226-10010.jpg"
      width={1179} 
      height={786} 
      alt="Team working"
      className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[700px] 
      object-cover opacity-60"
    />

    
    <div className="absolute inset-0 bg-gradient-to-t 
      from-[#0a0500] via-transparent to-transparent"></div>

    
    <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 
      left-0 right-0 px-4">

      <h1 className="text-lg sm:text-2xl md:text-3xl text-white">
        Welcome to
      </h1>

      <p className="text-[#FF8D28] 
        text-2xl sm:text-3xl md:text-4xl 
        mt-1 sm:mt-2 font-medium">
        Cody's Commerce !
      </p>

    </div>

  </div>

</section>

    
   <section className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-1 rounded-full shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)] bg-neutral-900 backdrop-blur-sm border border-white/30">
              <span className="text-xs font-bold tracking-widest text-nowrap text-[#FF8D28] ">
                ABOUT FOUNDER
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
              Meet The Founder
            </h2>
          </div>
          
          <p className="text-[#949494] text-lg max-w-3xl leading-relaxed">
             I specialize in Amazon and Walmart resale, with a focus on working directly with brands
              to ensure their products are represented the right way. Through hands-on experience across both marketplaces,
              I've built a system centered around clean, optimized listings, consistent pricing, and reliable fulfillment. <br/><br/>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div className="relative group">
<div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 rounded-t-full overflow-hidden bg-[#FF8D28] shadow-[0_0_50px_rgba(255,141,40,0.2)]">
  
  <img 
    src="/founder.png" 
    alt="Founder Zachary"
    className="absolute bottom-0 left-1/2 -translate-x-1/2 
               h-[100%] w-full object-contain
               z-10 grayscale brightness-100 opacity-90 contrast-110
               transition-all duration-500 hover:grayscale-0"
  />

  <div className="absolute bottom-0 opacity-75 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20"></div>

</div>
          
          <div className="-mt-8 relative z-30 pointer-events-none">
    <h2 className="text-6xl md:text-6xl font-bold text-[#FF8D28] leading-[0.8] tracking-tighter uppercase">
      FOUNDER
    </h2>
    <h2 className="text-5xl md:text-6xl font-bold text-white leading-[0.8] tracking-tighter uppercase">
      Zachary 
    </h2>
  </div>
          </div>

          <div className="pt-10 mr-10">
            <p className="text-[#949494] text-lg leading-relaxed mb-10">
           

I come from humble beginnings selling used products on eBay in 2015 to my current eCommerce
 storefront that I started during COVID lockdowns in 2020. <br/><br/>

I like to play golf when I find myself with free time on my hands, even though
 it seems I get worse from year to year! I also spend my days building a trading card 
 collection and playing trombone in a local community band. <br/><br/>

My wife and I currently live in Binghamton, NY with our two cats Frieza and Gouda. <br/><br/>

At the end of the day, I want Cody's Commerce, LLC to represent my values and your
 interests mutually. This business is built for long-term growth, strong partnerships,
  and doing things the right way from the start.
            </p>
            

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
  
  <div className="flex items-center cursor-pointer hover:border-amber-500 hover:shadow-amber-500/70 
    shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]
    transition-transform duration-300 hover:scale-105 active:scale-95 
    bg-neutral-900 backdrop-blur-2xl border border-white/30 
    gap-2 px-3  sm:px-4 py-2 rounded-full">

    <span className="text-sm sm:text-base">🧠</span>
    <span className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide">
      Visionary Thinker
    </span>
  </div>

  <div className="flex items-center cursor-pointer hover:border-amber-500 hover:shadow-amber-500/70 
    shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]
    transition-transform duration-300 hover:scale-105 active:scale-95 
    bg-neutral-900 backdrop-blur-2xl border border-white/30 
    gap-2 px-3 sm:px-4 py-2 rounded-full">

    <span className="text-sm sm:text-base">💡</span>
    <span className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide">
      Problem Solver
    </span>
  </div>

  <div className="flex h-11 items-center cursor-pointer hover:border-amber-500 hover:shadow-amber-500/70 
    shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]
    transition-transform duration-300 hover:scale-105 active:scale-95 
    bg-neutral-900 backdrop-blur-2xl border border-white/30 
    gap-1 px-3 sm:px-4 py-2 rounded-full">

    <span className="text-sm sm:text-base">🔥</span>
    <span className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide">
      Passionate Mentor
    </span>
  </div>

  <div className="flex items-center cursor-pointer hover:border-amber-500 hover:shadow-amber-500/70 
    shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]
    transition-transform duration-300 hover:scale-105 active:scale-95 
    bg-neutral-900 backdrop-blur-2xl border border-white/30 
    gap-1 px-3 sm:px-4 py-2 rounded-full">

    <span className="text-sm sm:text-base">🤝</span>
    <span className="text-white text-xs  sm:text-sm md:text-base font-medium tracking-wide">
      Empathetic Leader
    </span>
  </div>

</div>
          </div>
        </div>
      </section>
  
<section className="relative w-full min-h-200 flex items-center justify-center overflow-hidden my-10">
  
  <div className="absolute inset-0 z-0">
    <Image 
      src="/generative-ai-warehouse-interior-with-led-lighting-industry-building-distribution-retail-center-part-of-storage-and-shipping-system-photo.jpg" 
      alt="Warehouse background" 
      fill 
      className="object-cover opacity-40 brightness-50"
    />
  
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]"></div>
  </div>
<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
  <p className="text-white  text-base sm:text-lg md:text-xl lg:text-3xl leading-loose font-extralight tracking-wide ">
    Partnering with Cody's Commerce, your definitive all-in-one growth partner.
    You gain the power of a synchronized team where every strategy from marketing 
    and advertising to daily account management is aligned with your success. 
    We provide a complete service ecosystem designed to position your brand 
    for market leadership. Let us absorb the operational complexities so you 
    can return to the parts of your business you love. Peace of mind starts here.
  </p>
</div>
   
</section>
<div className='-mt-20 '>
        <section className="max-w-4xl  mx-auto px-4  py-30">
<div className="flex flex-col  items-center text-center  px-4">
  

  <div className="mb-8 px-6 py-2 rounded-full  shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)] bg-neutral-900 border border-white/30 backdrop-blur-md ">
    <span className="text-[#FF8D28] font-bold text-lg tracking-wide">
      Frequently Asked Questions
    </span>
  </div>

  {/* 2. Stacked Main Titles - matches the bold white typography */}
  <div className="space-y-2">
    <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight">
      Got Questions?
    </h2>
    <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight">
      We've Got Answers!
    </h2>
  </div>
</div>
        </section>
      
 <section className="max-w-4xl mx-auto px-4 pb-10 relative z-10">
  <div className="space-y-4">
    {faqData.map((faq, i) => (
      <label
        key={i}
        className="block border border-neutral-700 bg-neutral-900 rounded-3xl cursor-pointer transition-all duration-300 hover:border-orange-500/50 hover:bg-neutral-800/60 shadow-[inset_0_1px_10px_rgba(255,255,255,0.05)] overflow-hidden"
      >
        {/* Hidden checkbox */}
        <input type="checkbox" className="peer hidden" />

       
        <div className="flex justify-between items-center p-5">
          <span className="text-gray-200 font-medium tracking-wide">
            {faq.question}
          </span>

         
          <div className="bg-[#FF8D28] p-2 rounded-lg text-black transition-transform duration-300 peer-checked:rotate-180">
            <FiChevronDown size={20} />
          </div>
        </div>

       
        <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-[500px] px-5">
          <p className="text-gray-300 pb-5">{faq.answer}</p>
        </div>
      </label>
    ))}
  </div>
   <div className="flex justify-center items-center w-full">
  <p className='text-white text-center tracking-widest text-[10px] sm:text-xs md:text-sm mt-8 sm:mt-10 md:mt-12 lg:mt-16 px-4'>
    Partner with us today to transform your eCommerce strategy into <br className="hidden sm:block"/> a scalable success story
  </p>
</div>
</section>

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
   
  );
}