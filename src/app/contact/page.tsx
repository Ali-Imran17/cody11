"use client";
import  { useState, FormEvent } from 'react';
import {  FiPhoneCall, FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';

const Contact = () => {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");

    const formData = new FormData(e.currentTarget);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz1n7sGgv4zD4XJU4dkxFPqzfkRXBmLk0xEC2n31qpgktxcbV-B9-HArLrwdKQWC7Hb/exec",
        {
          method: "POST",
          mode: "no-cors", 
          body: new URLSearchParams(formData as any),
        }
      );

      setStatus("Thank you! Your message has been submitted successfully.");
      e.currentTarget.reset();

    } catch (error) {
      console.error(error);
    }
  };

  const [copySuccess, setCopySuccess] = useState(false); 

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-orange-500/30">
      
   
      <div className="absolute inset-0 bg-[#4b1f00] bg-[repeating-linear-gradient(90deg,#5a2400_0px,#5a2400_60px,#4b1f00_60px,#4b1f00_120px)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.7)_75%,black_100%)]"></div>

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

    
      <form
  onSubmit={handleSubmit}
  className="w-full max-w-3xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8"
>
  <div className="bg-[#121212] border hover:border-amber-700 hover:shadow ease-in-out duration-700 hover:shadow-amber-500 border-white/10 rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 space-y-3 sm:space-y-4 md:space-y-5">

    <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold">
      Contact Us
    </h2>

    <input 
      name="fullName" 
      placeholder="Full Name" 
      required 
      className="w-full p-2.5 sm:p-3 text-gray-300 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors"
    />
    
    <input 
      name="phone" 
      placeholder="Phone Number" 
      required 
      className="w-full p-2.5 sm:p-3 text-gray-300 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors"
    />
    
    <input 
      name="company" 
      placeholder="Company Name" 
      className="w-full p-2.5 sm:p-3 text-gray-300 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors"
    />
    
    <input 
      name="address" 
      placeholder="Business Address" 
      className="w-full p-2.5 sm:p-3 text-gray-300 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors"
    />
    
    <input 
      name="email" 
      type="email" 
      placeholder="Email Address" 
      required 
      className="w-full p-2.5 sm:p-3 text-gray-300 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors"
    />

    <textarea 
      name="message" 
      rows={4} 
      placeholder="Your Message..." 
      className="w-full p-2.5 sm:p-3 text-gray-300 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors resize-vertical"
    ></textarea>

    <button 
      type="submit"
      className="w-full bg-[#ff8d28] cursor-pointer text-black py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#d87015] transition-colors active:scale-98"
    >
      Submit
    </button>

  
    {status && (
      <p className="text-center text-amber-400 mt-3 sm:mt-4 text-xs sm:text-sm">{status}</p>
    )}

  </div>
</form>
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
  );
};

export default Contact;