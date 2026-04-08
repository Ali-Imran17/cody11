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

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-orange-500/30">
      
      {/* Background */}
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
    
    {/* Desktop Menu */}
    <ul className="hidden lg:flex gap-6 md:gap-8 text-sm font-bold tracking-wide text-white">
      <Link href='/' className='hover:text-[#ff8d28]'>Home</Link>
      <Link href='/aboutus' className='hover:text-[#ff8d28]'>About</Link>
      <Link href='/codycommerce' className='hover:text-[#ff8d28]'>Cody's Commerce</Link>
      <Link href='/pricing' className='hover:text-[#ff8d28]'>Pricing</Link>
      <Link href='/contact' className='hover:text-[#ff8d28]'>Contact</Link>
    </ul>

    {/* Mobile Hamburger */}
    <label 
      htmlFor="menu-toggle" 
      className="md:block lg:hidden ml-auto  text-white cursor-pointer"
    >
      ☰
    </label>

  </div>

  {/* Mobile Dropdown */}
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

        {/* Form */}
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
      className="w-full p-2.5 sm:p-3 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors"
    />
    
    <input 
      name="phone" 
      placeholder="Phone Number" 
      required 
      className="w-full p-2.5 sm:p-3 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors"
    />
    
    <input 
      name="company" 
      placeholder="Company Name" 
      className="w-full p-2.5 sm:p-3 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors"
    />
    
    <input 
      name="address" 
      placeholder="Business Address" 
      className="w-full p-2.5 sm:p-3 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors"
    />
    
    <input 
      name="email" 
      type="email" 
      placeholder="Email Address" 
      required 
      className="w-full p-2.5 sm:p-3 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors"
    />

    <textarea 
      name="message" 
      rows={4} 
      placeholder="Your Message..." 
      className="w-full p-2.5 sm:p-3 bg-black/40 border border-white/20 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#ff8d28] transition-colors resize-vertical"
    ></textarea>

    <button 
      type="submit"
      className="w-full bg-[#ff8d28] cursor-pointer text-black py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#d87015] transition-colors active:scale-98"
    >
      Submit
    </button>

    {/* Success message */}
    {status && (
      <p className="text-center text-green-400 mt-3 sm:mt-4 text-xs sm:text-sm">{status}</p>
    )}

  </div>
</form>
         <div>
            <p className='text-white text-center tracking-widest text-sm mt-12 md:mt-50'>
              Partner with us today to transform your eCommerce strategy into <br/> a scalable success story
            </p>
          </div>
        {/* Footer */}
         <footer className="py-12 sm:py-16 md:py-20 mt-2 sm:mt-4 px-4">

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">

    {/* Contact Inputs */}
    <div className="space-y-4 sm:space-y-5 w-full sm:col-span-2 md:col-span-1">
      <div className="flex items-center gap-3 bg-neutral-900 border border-white/30 p-3 sm:p-4 rounded-xl">
        <div className="text-[#FF8D28] text-xl sm:text-2xl"><CiMail /></div>
        <input 
          type="text" 
          placeholder='loremipsum@mail.com' 
          className='bg-transparent outline-none w-full text-sm sm:text-base'
        />
      </div>

      <div className="flex items-center gap-3 bg-neutral-900 border border-white/30 p-3 sm:p-4 rounded-xl">
        <div className="text-[#FF8D28] text-xl sm:text-2xl"><FiPhoneCall /></div>
        <input 
          type="tel" 
          placeholder='+1 000-020-4444' 
          className='bg-transparent outline-none w-full text-sm sm:text-base'
        />
      </div>
    </div>

    {/* Quick Links */}
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

    {/* Social Links */}
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

  {/* Divider */}
  <div className="w-full mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto border-t border-[#7B7878]"></div>

</footer>

      </div>
    </div>
  );
};

export default Contact;