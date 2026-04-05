"use client";
import React from 'react';

import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="relative min-h-screen transition-colors text-white font-sans selection:bg-orange-500/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#4b1f00] bg-[repeating-linear-gradient(90deg,#5a2400_0px,#5a2400_60px,#4b1f00_60px,#4b1f00_120px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.7)_75%,black_100%)]" />
      <div className="relative z-10">

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center pt-10 px-4 overflow-hidden">
          {/* Logo */}
          <Link href='/' className="absolute top-12 left-4 md:left-10 z-20 text-white font-black tracking-widest text-xl cursor-pointer">Cody</Link>

          {/* Navbar */}
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

          {/* Hero Brands */}
         <div className="flex flex-wrap justify-center items-center gap-30 sm:gap-60 md:gap-79 lg:gap-110 mt-10 md:mt-20">
  
  <span className="bg-[#FF8D28] px-2 py-1 text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-center">
    AMAZON
  </span>

  <span className="bg-[#FF8D28] px-2 py-1  text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-center">
    WALMART
  </span>

</div>

          {/* Headline */}
          <h1 className="text-xl md:text-4xl text-nowrap  lg:text-5xl font-bold mb-12 text-center">
            Strategic Brand Expansion and <br />
            <span className="text-white font-bold text-xl lg:text-5xl md:text-4xl">
              Unlocking Revenue Streams for
            </span>
            <p className='text-xs md:text-sm font-light mt-4'>
              From Listing to Logistics: Powering Your Growth<br className="block sm:hidden"/> Across North America
            </p>
          </h1>

          {/* Commerce Section */}
          <div className="mt-28 text-center">
            <h2 className="text-3xl md:text-5xl font-medium uppercase text-orange-400">The Cody Commerce</h2>
            <p className="text-2xl md:text-3xl">Growth Engine</p>
           
            <p className='text-sm text-white mt-4 md:mt-2'>At Cody’s Commerce you aren’t a number you’re a priority.</p>
            <p className="text-white mt-8 max-w-xl md:max-w-2xl mx-auto leading-relaxed text-sm">
              Our 'Cody’s Commerce Framework is fast, effective, and better than risk-free because we buy your stock directly. We work off margin, handle the fulfillment, and drive the growth. We take the headaches. You take the profit.
            </p>
          </div>

          {/* Icon Flow */}
     <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-10 px-4">
  {["/growth img.png", "/checklist.png", "/earning.png"].map((img, idx) => (
    <React.Fragment key={idx}>
      
      {/* Card */}
      <div className="cursor-pointer transition-transform duration-300 
        hover:border-orange-500 hover:shadow-amber-600 hover:scale-105 
        active:scale-95 p-5 md:p-6 
        h-28 w-28 md:h-52 md:w-44 
        shadow-[inset_0_4px_15px_rgba(255,255,255,0.2)]
        bg-[#1c130d]/90 backdrop-blur-md 
        border border-gray-400/70 rounded-2xl 
        flex items-center justify-center">
        
        <Image 
          src={img} 
          alt={`icon-${idx}`} 
          width={120} 
          height={120} 
          className="object-contain" 
        />
      </div>

      {/* Arrows */}
      {idx < 2 && (
        <>
          {/* Desktop arrow (→ right) */}
          <span className="hidden md:flex text-white text-5xl items-center justify-center">
            ⟶
          </span>

          {/* Mobile arrow (↓ down) */}
          <span className="flex md:hidden text-white text-3xl items-center justify-center rotate-90">
            →
          </span>
        </>
      )}

    </React.Fragment>
  ))}
</div>
        </section>

        {/* Partners Section */}
        <section className="py-20 flex flex-col items-center px-4">
          <div className="relative bg-[#161616] w-full max-w-5xl h-60 md:h-80 rounded-[100px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#161616] border border-white/20 px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg">
              <span className="text-white uppercase tracking-widest font-black text-sm md:text-base">
                Our Partners
              </span>
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#1c130d]/90 backdrop-blur-md border border-orange-900/50 px-4 md:px-6 py-2 md:py-3 rounded-[40px] flex items-center gap-2 md:gap-4">
              <div className="flex -space-x-2 md:-space-x-3">
                {[1,2,3].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-[#2a1a10] object-cover" alt="User" />
                ))}
              </div>
              <div className="flex flex-col text-xs md:text-sm">
                <div className="flex text-yellow-500 text-[10px] md:text-xs">★★★★★</div>
                <span className="text-white/80 text-[8px] md:text-[10px] font-medium whitespace-nowrap">100+ 5 Star Reviews</span>
              </div>
            </div>
            <div className="absolute bottom-0 w-full h-1/2 bg-linear-to-t from-orange-900/20 to-transparent rounded-b-[100px] pointer-events-none"></div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-xl md:text-4xl font-bold text-white mb-4">
                Scale Your Brand with a Partner Who Invests in You<br/><br className='block sm:hidden'/>
                Your dedicated team for eCommerce acceleration
              </h2>
            </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 
  gap-6 md:gap-10 lg:gap-16 
  max-w-6xl mx-auto px-4 md:px-8">

  {[
    { id: '01', title: 'INTELLIGENCE', icon: '/intelligence.png', desc: 'We utilize advanced analytics to decode sales velocity, consumer intent, and category trends. This deep-dive intelligence allows us to deploy custom strategies that position your brand exactly where the demand is highest.' },
    { id: '02', title: 'CAPITAL', icon: '/earning.png', desc: 'We act as a strategic investor, fueling your operations through substantial wholesale purchase orders and funded advertising initiatives. Leveraging our extensive vendor network and history of $100M+ in revenue generation.' },   
    { id: '03', title: 'LOGISTICS', icon: '/logistic.png', desc: 'We transform your supply chain into a competitive advantage. Our infrastructure is engineered for speed, accuracy, and seamless scalability, ensuring your inventory moves efficiently from our docks to the customer’s door. We manage the entire lifecycle with advanced tracking systems that eliminate delays, no matter the product size.' },
    { id: '04', title: 'SUPPORT', icon: '/customer support.png', desc: 'We handle the complexities of returns and customer communication so you don’t have to. Our systems are designed to maximize uptime and minimize friction, ensuring seamless inventory flow and rapid shipping, giving you the freedom to scale without the operational noise.' },
  ].map((service) => (
    
    <div key={service.id} className="relative group">
      
      <div className="bg-[#121212] backdrop-blur-md border 
        border-gray-400 rounded-3xl 
        p-5 sm:p-6 md:p-8 lg:p-10
        shadow-[inset_0_4px_15px_rgba(255,255,255,0.2)]
        transition-all duration-300
        hover:shadow-[0_0_40px_rgba(255,170,0,0.35)]
        hover:border-orange-500/60 hover:scale-[1.02]
        active:scale-95 cursor-pointer">

        {/* ID Badge */}
        <div className="absolute 
          -top-4 -left-4 md:-top-5 md:-left-5
          w-10 h-10 md:w-14 md:h-14
          flex items-center justify-center
          text-sm md:text-lg font-medium text-white
          rounded-full border border-gray-400/70
          bg-[#121212] -rotate-12
          shadow-[inset_0_4px_15px_rgba(255,255,255,0.2)]">
          {service.id}
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-4 md:mb-6">
          <img 
            src={service.icon} 
            alt={service.title} 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-white 
          text-lg sm:text-xl md:text-2xl lg:text-3xl 
          text-center tracking-widest uppercase mb-3 md:mb-4">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white 
          text-xs sm:text-sm md:text-base 
          text-center leading-relaxed 
          mt-2 md:mt-4">
          {service.desc}
        </p>

      </div>
    </div>

  ))}
</div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-32 md:items-start sm:items-start text-center">
          <div className="flex flex-wrap justify-center mb-2 mt-10 mr-40 md:mr-80 md:mt-20">
            <span className="bg-[#FF8D28] px-1 py-1 font-medium text-xs md:text-lg">LAUNCH YOUR NEXT CHAPTER</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-16">Your Roadmap to Revenue</h2>
          <p className="text-white -mt-10 tracking-widest text-xs md:text-sm">
            Hover over the milestones below to explore the key phases of our <br/> integration process.
          </p>

          <div className="relative text-white mt-12 md:mt-20">
          

          <div className="w-full py-12  flex justify-center">
  
  <div className="w-full max-w-6xl px-4 flex items-center">
    
    {/* Icon 1 */}
    <div className="flex items-center  w-full">
      
      <div className="w-14 h-14 transition-transform duration-350 active:scale-95 hover:scale-110 cursor-pointer sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-[#FF8D28] bg-[#2a0f04] flex items-center justify-center shadow-[0_0_10px_#FF8D28] z-10">
        <img src="/money bag.png" className="w-6 sm:w-8 md:w-10 object-contain" />
      </div>

      {/* Line */}
      <div className="flex-1 h-[2px] bg-[#FF8D28]"></div>
    </div>

    {/* Icon 2 */}
    <div className="flex items-center w-full">
      
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-350 active:scale-95 hover:scale-110 cursor-pointer rounded-full border-2 border-[#FF8D28] bg-[#2a0f04] flex items-center justify-center shadow-[0_0_10px_#FF8D28] z-10">
        <img src="/brain.png" className="w-6 sm:w-8 md:w-10 object-contain" />
      </div>

      {/* Line */}
      <div className="flex-1 h-[2px] bg-[#FF8D28]"></div>
    </div>

    {/* Icon 3 */}
    <div className="flex items-center w-full">
      
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-350 active:scale-95 hover:scale-110 cursor-pointer rounded-full border-2 border-[#FF8D28] bg-[#2a0f04] flex items-center justify-center shadow-[0_0_10px_#FF8D28] z-10">
        <img src="/delivery truck.png" className="w-6 sm:w-8 md:w-10 object-contain" />
      </div>

      {/* Line */}
      <div className="flex-1 h-[2px] bg-[#FF8D28]"></div>
    </div>

    {/* Icon 4 (last — no line after) */}
    <div className="flex items-center">
      
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-350 active:scale-95 hover:scale-110 cursor-pointer rounded-full border-2 border-[#FF8D28] bg-[#2a0f04] flex items-center justify-center shadow-[0_0_10px_#FF8D28] z-10">
        <img src="/headphone.png" className="w-6 sm:w-8 md:w-10 object-contain" />
      </div>

    </div>

  </div>
</div>
          </div>
          <div>
            <p className='text-white tracking-widest text-sm mt-12 md:mt-50'>
              Partner with us today to transform your eCommerce strategy into <br/> a scalable success story
            </p>
          </div>
        </section>

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
}