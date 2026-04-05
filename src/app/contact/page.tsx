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

          <Link href='/' className="absolute top-6 left-5 md:top-12 md:left-10 z-20 bg-linear-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] text-white font-black tracking-widest text-lg md:text-xl cursor-pointer">
            Cody
          </Link>
<nav className="
  z-50 relative md:mx-auto ml-auto
  w-fit
  bg-neutral-900 backdrop-blur-2xl 
  border border-white/30 
  px-4 md:px-8 py-3 
  rounded-full mb-16 
  shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]
">

  <input type="checkbox" id="menu-toggle" className="hidden peer" />

  <div className="flex justify-between items-center">
    
    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-6 md:gap-8 text-sm font-bold tracking-wide text-white">
      <Link href='/' className='hover:text-[#ff8d28]'>Home</Link>
      <Link href='/aboutus' className='hover:text-[#ff8d28]'>About</Link>
      <Link href='/codycommerce' className='hover:text-[#ff8d28]'>Cody</Link>
      <Link href='/pricing' className='hover:text-[#ff8d28]'>Pricing</Link>
      <Link href='/contact' className='hover:text-[#ff8d28]'>Contact</Link>
    </ul>

    {/* Mobile Hamburger */}
    <label 
      htmlFor="menu-toggle" 
      className="md:hidden ml-auto text-white text-2xl cursor-pointer"
    >
      ☰
    </label>

  </div>

  {/* Mobile Dropdown */}
  <div className="
    absolute right-0 top-16   
    w-52 
    bg-neutral-900 
    border border-white/20 
    rounded-2xl p-6 
    flex-col gap-4 text-white 
    hidden peer-checked:flex md:hidden
  ">
    <Link href='/' className='hover:text-[#ff8d28]'>Home</Link>
    <Link href='/aboutus' className='hover:text-[#ff8d28]'>About</Link>
    <Link href='/codycommerce' className='hover:text-[#ff8d28]'>Cody</Link>
    <Link href='/pricing' className='hover:text-[#ff8d28]'>Pricing</Link>
    <Link href='/contact' className='hover:text-[#ff8d28]'>Contact</Link>
  </div>

</nav>
        </section>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl mx-auto px-4 py-8"
        >
          <div className="bg-[#121212] border border-white/10 rounded-4xl shadow-2xl p-6 md:p-10 space-y-5">

            <h2 className="text-2xl md:text-3xl text-center">
              Contact Us
            </h2>

            <input name="fullName" placeholder="Full Name" required className="w-full p-3 bg-black/40 border border-white/20 rounded-lg"/>
            <input name="phone" placeholder="Phone Number" required className="w-full p-3 bg-black/40 border border-white/20 rounded-lg"/>
            <input name="company" placeholder="Company Name" className="w-full p-3 bg-black/40 border border-white/20 rounded-lg"/>
            <input name="address" placeholder="Business Address" className="w-full p-3 bg-black/40 border border-white/20 rounded-lg"/>
            <input name="email" type="email" placeholder="Email Address" required className="w-full p-3 bg-black/40 border border-white/20 rounded-lg"/>

            <textarea name="message" rows={4} placeholder="Your Message..." className="w-full p-3 bg-black/40 border border-white/20 rounded-lg"></textarea>

            <button className="w-full bg-[#ff8d28] cursor-pointer text-black py-3 rounded-lg">
              Submit
            </button>

            {/* Success message */}
            {status && (
              <p className="text-center text-green-400 mt-4">{status}</p>
            )}

          </div>
        </form>
         <div>
            <p className='text-white text-center tracking-widest text-sm mt-12 md:mt-50'>
              Partner with us today to transform your eCommerce strategy into <br/> a scalable success story
            </p>
          </div>
        {/* Footer */}
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
};

export default Contact;