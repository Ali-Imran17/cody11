import React from 'react';
import { FiTwitter, FiPhoneCall, FiLinkedin, FiChevronDown } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';

export default function aboutus() {
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

        <Link href='/' className="absolute top-12 left-10 z-20 bg-linear-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] text-white font-black tracking-widest text-xl cursor-pointer">
          Cody
        </Link>

    <nav className="z-50 relative bg-neutral-900 backdrop-blur-2xl border border-white/30 px-4 md:px-8 py-3 rounded-full mb-16 shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]">
             <input type="checkbox" id="menu-toggle" className="hidden peer " />
             <div className="flex justify-between items-center">
               <ul className="hidden md:flex gap-6 md:gap-8 text-sm font-bold tracking-wide text-white">
                <Link href='/' className='hover:text-[#ff8d28]'>Home</Link>
                <Link href='/aboutus' className='hover:text-[#ff8d28]'>About</Link>
                <Link href='/codycommerce' className='hover:text-[#ff8d28]'>Cody</Link>
                <Link href='/pricing' className='hover:text-[#ff8d28]'>Pricing</Link>
                <Link href='/contact' className='hover:text-[#ff8d28]'>Contact</Link>
               </ul>
               <label htmlFor="menu-toggle" className="md:hidden ml-auto text-white text-2xl cursor-pointer">☰</label>
             </div>
             <div className="absolute left-1 top-16 w-52 bg-neutral-900 border border-white/20 rounded-2xl p-6 flex-col gap-4 text-white hidden peer-checked:flex md:hidden">
                <Link href='/' className='hover:text-[#ff8d28]'>Home</Link>
                <Link href='/aboutus' className='hover:text-[#ff8d28]'>About</Link>
                <Link href='/codycommerce' className='hover:text-[#ff8d28]'>Cody</Link>
                <Link href='/pricing' className='hover:text-[#ff8d28]'>Pricing</Link>
                <Link href='/contact' className='hover:text-[#ff8d28]'>Contact</Link>
             </div>
           </nav>
</section>

        <section className="pt-20 pb-32 px-4 text-center">
          <div className="max-w-4xl mx-auto rounded-4xl overflow-hidden border border-white/10 shadow-2xl relative">
           <Image src="/business-people-working-together-office-business-team-working-together-business-people-working-together_980226-10010.jpg" width={1179} height={786} alt="Team working" className="w-294 h-195 object-cover opacity-60" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0500] via-transparent to-transparent"></div>
            <div className="absolute bottom-10  left-0 right-0">
              <h1 className="text-3xl md:text-4xl ">Welcome to</h1>
              <p className="text-[#FF8D28]  text-4xl mt-2 font-medium">Cody Commerce !</p>
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
              I’ve built a system centered around clean, optimized listings, consistent pricing, and reliable fulfillment. <br/><br/>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div className="relative group">

            <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 rounded-t-full overflow-hidden bg-[#FF8D28] shadow-[0_0_50px_rgba(255,141,40,0.2)]">
              <img 
      src="/founder.png" 
      alt="Founder Samuel"
      className="absolute  left-1/2 -translate-x-1/2 w-170 max-w-none z-10 
                 grayscale brightness-100 opacity-90 contrast-110
                 transition-all duration-500 hover:grayscale-0"
    />
    <div className="absolute bottom-0 opacity-75 left-0 w-full h-24 bg-linear-to-t from-black to-transparent z-20"></div>
  
            </div>
          
          <div className="-mt-8 relative z-30 pointer-events-none">
    <h2 className="text-6xl md:text-6xl font-bold text-[#FF8D28] leading-[0.8] tracking-tighter uppercase">
      FOUNDER
    </h2>
    <h2 className="text-5xl md:text-6xl font-bold text-white leading-[0.8] tracking-tighter uppercase">
      zachary 
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

At the end of the day, I want Cody’s Commerce, LLC to represent my values and your
 interests mutually. This business is built for long-term growth, strong partnerships,
  and doing things the right way from the start.
            </p>
            

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
  
  <div className="flex items-center cursor-pointer hover:border-amber-500 hover:shadow-amber-500/70 
    shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]
    transition-transform duration-300 hover:scale-105 active:scale-95 
    bg-neutral-900 backdrop-blur-2xl border border-white/30 
    gap-2 px-3 sm:px-4 py-2 rounded-full">

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

  <div className="flex items-center cursor-pointer hover:border-amber-500 hover:shadow-amber-500/70 
    shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]
    transition-transform duration-300 hover:scale-105 active:scale-95 
    bg-neutral-900 backdrop-blur-2xl border border-white/30 
    gap-2 px-3 sm:px-4 py-2 rounded-full">

    <span className="text-sm sm:text-base">🔥</span>
    <span className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide">
      Passionate Mentor
    </span>
  </div>

  <div className="flex items-center cursor-pointer hover:border-amber-500 hover:shadow-amber-500/70 
    shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]
    transition-transform duration-300 hover:scale-105 active:scale-95 
    bg-neutral-900 backdrop-blur-2xl border border-white/30 
    gap-2 px-3 sm:px-4 py-2 rounded-full">

    <span className="text-sm sm:text-base">🤝</span>
    <span className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide">
      Empathetic Leader
    </span>
  </div>

</div>
          </div>
        </div>
      </section>
  
<section className="relative w-full min-h-200 flex items-center justify-center overflow-hidden my-20">
  
  <div className="absolute inset-0 z-0">
    <Image 
      src="/generative-ai-warehouse-interior-with-led-lighting-industry-building-distribution-retail-center-part-of-storage-and-shipping-system-photo.jpg" 
      alt="Warehouse background" 
      fill 
      className="object-cover opacity-40 brightness-50"
    />
  
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]"></div>
  </div>
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
    <p className="text-white text-lg md:text-2xl leading-relaxed font-light tracking-wide">
    Partnering with Cody’s Commerce "Cody’s Commerce is <br/> your definitive all-in-one growth partner.
     You gain the<br/>  power of a synchronized team where every strategy<br/>  from marketing and advertising to daily 
     account<br/>  management is aligned with your success. We provide a<br/>  complete service ecosystem designed to position
      your<br/>  brand for market leadership. Let us absorb the<br/>  operational complexities so you can return to the parts<br/> 
       of your business you love. Peace of mind starts here.
    </p>

   </div>
   
</section>
<div className='-mt-20 '>
        <section className="max-w-4xl  mx-auto px-4  py-32">
<div className="flex flex-col  items-center text-center  px-4">
  

  <div className="mb-8 px-6 py-2 rounded-full  shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)] bg-neutral-900 border border-white/30 backdrop-blur-md ">
    <span className="text-[#FF8D28] font-bold text-lg tracking-wide">
      Frequently Asked Questions
    </span>
  </div>

  {/* 2. Stacked Main Titles - matches the bold white typography */}
  <div className="space-y-2">
    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
      Got Questions?
    </h2>
    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
      We've Got Answers!
    </h2>
  </div>
</div>
        </section>
        {/* FAQ List Section */}
<section className="max-w-4xl mx-auto px-4 pb-20 relative z-10">
  <div className="space-y-4">
    {[
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
    ].map((question, i) => (
      <div 
        key={i} 
        className="group border-neutral-700 border bg-linear-to-t from-orange-900/10 to-transparent text-gray-400 bg-neutral-900 p-5 rounded-4xl flex justify-between items-center cursor-pointer transition-all duration-300 hover:border-orange-500/50 hover:bg-neutral-800/60 shadow-[inset_0_1px_10px_rgba(255,255,255,0.05)]"
      >
        <span className="text-gray-200 font-medium tracking-wide">
          {question}
        </span>
        
        {/* The Orange Chevron Button from image */}
        <div className="bg-[#FF8D28] p-2 rounded-lg text-black transition-transform duration-300 group-hover:scale-110">
          <FiChevronDown size={20} />
        </div>
      </div>
    ))}
  </div>

  {/* Bottom Success Story CTA */}
  <div className="mt-32 mb-10 text-center">
    <p className="text-white text-lg md:text-lg max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
      Partner with us today to transform your eCommerce strategy into <br className="hidden md:block" />
      a <span className="text-gray-300 font-normal">scalable success story</span>
    </p>
    
    {/* Subtle Orange Glow at the bottom of the text as seen in photo */}
    <div className="w-40 h-1 bg-orange-500/40 blur-xl mx-auto mt-4"></div>
  </div>
</section>
</div>

        {/* FOOTER (Centered Underline Included) */}
      <footer className="py-20 mt-4 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

            {/* Contact Inputs */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 bg-neutral-900 backdrop-blur-2xl border border-white/30 p-4 rounded-xl">
                <div className="text-[#FF8D28] text-2xl"><CiMail /></div>
                <input type="text" placeholder='loremipsum@mail.com' className='bg-transparent border-none focus:outline-none focus:ring-0 w-full'/>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900 backdrop-blur-2xl border border-white/30 p-4 rounded-xl">
                <div className="text-[#FF8D28] text-2xl"><FiPhoneCall /></div>
                <input type="tel" placeholder='+1 000-020-4444' className='bg-transparent border-none focus:outline-none focus:ring-0 w-full' />
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center mx-auto md:text-left md:mx-0 md:ml-20">
              <h4 className="text-[#FF8D28] font-bold mb-6 tracking-widest text-2xl">Quick Links</h4>
              <div className="space-y-2 text-sm font-bold -mt-2 grid text-white justify-center md:justify-start">
                <Link href='/aboutus' className="hover:text-[#ff8d28] transition-colors">About Us</Link>
                <Link href='/codycommerce' className="hover:text-[#ff8d28] transition-colors">Cody Commerce</Link>
                <Link href='/pricing' className="hover:text-[#ff8d28] transition-colors">Pricing</Link>
                <Link href='/contact' className="hover:text-[#ff8d28] transition-colors">Contact</Link>
              </div>
            </div>

           {/* Social Links */}
<div className="flex justify-center md:justify-start items-center text-[#FF8D28]">
  <Link 
    href='https://www.linkedin.com/in/zachary-cody-11b0381a4/'
    target="_blank"
    className='hover:text-white transition-all duration-300 hover:scale-110'
  >
    <FiLinkedin size={40} />
  </Link>
</div>


          </div>

          <div className="w-full mt-24 max-w-4xl mx-auto border-t border-[#7B7878]"></div>
        </footer>

      </div>
    </div>
   
  );
}
