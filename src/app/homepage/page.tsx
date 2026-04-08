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
        <section className="relative min-h-screen flex flex-col items-center pt-8 sm:pt-8 md:pt-10 px-4 overflow-hidden">
          {/* Logo */}
          <Link href='/' className="absolute top-12 left-5  z-20 text-white font-black tracking-wide text-base sm:text-lg md:text-[18px] cursor-pointer">Cody's Commerce</Link>

          {/* Navbar */}
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
      className="md:block lg:hidden ml-auto  text-white text-2xl cursor-pointer"
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

          {/* Hero Brands */}
         <div className="flex flex-wrap justify-center items-center gap-30 sm:gap-40 md:gap-50 lg:gap-100 mt-4 sm:mt-6 md:mt-10">
  
  <span className="bg-[#FF8D28] px-1 py-0.5 text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-center">
    AMAZON
  </span>

  <span className="bg-[#FF8D28] px-1 py-0.5 text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-center">
    WALMART
  </span>

</div>

          {/* Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center px-2">
            Strategic Brand Expansion and <br />
            <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
              Unlocking Revenue Streams for
            </span>
            <p className='text-xs sm:text-sm md:text-base font-light mt-2 sm:mt-3 md:mt-4'>
              From Listing to Logistics: Powering Your Growth<br className="block sm:hidden"/> Across North America
            </p>
          </h1>

          {/* Commerce Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-28 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium uppercase text-orange-400">The Cody Commerce</h2>
            <p className="text-xl sm:text-2xl md:text-3xl">Growth Engine</p>
           
            <p className='text-xs sm:text-sm text-white mt-2 sm:mt-3 md:mt-4'>At Cody’s Commerce you aren’t a number you’re a priority.</p>
            <p className="text-white mt-4 sm:mt-6 md:mt-8 max-w-xl md:max-w-2xl mx-auto leading-relaxed text-xs sm:text-sm">
              Our 'Cody’s Commerce Framework is fast, effective, and better than risk-free because we buy your stock directly. We work off margin, handle the fulfillment, and drive the growth. We take the headaches. You take the profit.
            </p>
          </div>

          {/* Icon Flow */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-8 sm:py-10 md:py-12 px-4">
  
  {[
    { img: "/growth img.png", label: "Growth" },
    { img: "/checklist.png", label: "Checklist" },
    { img: "/earning.png", label: "Revenue" }
  ].map((item, idx) => (
    
    <React.Fragment key={idx}>
      
      {/* Card + Label Wrapper */}
      <div className="flex flex-col items-center">
        
        {/* Card */}
        <div className="cursor-pointer transition-transform duration-300 
          hover:border-orange-500 hover:shadow-amber-600 hover:scale-105 
          active:scale-95 p-4 sm:p-5 md:p-6 
          h-24 w-24 sm:h-28 sm:w-28 md:h-44 md:w-40 lg:h-52 lg:w-44 
          shadow-[inset_0_4px_15px_rgba(255,255,255,0.2)]
          bg-[#1c130d]/90 backdrop-blur-md 
          border border-gray-400/70 rounded-2xl 
          flex items-center justify-center">
          
          <Image 
            src={item.img} 
            alt={`icon-${idx}`} 
            width={120} 
            height={120} 
            className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28" 
          />
        </div>

        {/* Label */}
        <p className="text-white text-xs sm:text-sm md:text-base mt-2 text-center whitespace-nowrap">
          {item.label}
        </p>

      </div>

      {/* Arrows */}
      {idx < 2 && (
        <>
          {/* Desktop */}
          <span className="hidden md:flex text-white text-3xl sm:text-4xl lg:text-5xl items-center justify-center">
            ⟶
          </span>

          {/* Mobile */}
          <span className="flex md:hidden text-white text-2xl sm:text-3xl items-center justify-center rotate-90">
            →
          </span>
        </>
      )}

    </React.Fragment>
  ))}
</div>
        </section>

        {/* Partners Section */}
        <section className="py-12 sm:py-16 md:py-25 flex flex-col items-center px-4">
          <div className="relative bg-[#161616] w-full max-w-5xl h-48 sm:h-56 md:h-64 lg:h-90 rounded-[60px] sm:rounded-[80px] md:rounded-[100px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 bg-[#161616] border border-white/20 px-5 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 rounded-full shadow-lg">
              <span className="text-white uppercase tracking-widest font-black text-xs sm:text-sm md:text-base">
                Our Partners
              </span>
            </div>
            <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 bg-[#1c130d]/90 backdrop-blur-md border border-orange-900/50 px-4 sm:px-5 md:px-6 py-2 rounded-[30px] sm:rounded-[40px] flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="flex -space-x-2 md:-space-x-3">
                {[1,2,3].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-[#2a1a10] object-cover" alt="User" />
                ))}
              </div>
              <div className="flex flex-col text-[10px] sm:text-xs md:text-sm">
                <div className="flex text-yellow-500 text-[8px] sm:text-[10px] md:text-xs">★★★★★</div>
                <span className="text-white/80 text-[6px] sm:text-[8px] md:text-[10px] font-medium whitespace-nowrap">100+ 5 Star Reviews</span>
              </div>
            </div>
            <div className="absolute bottom-0 w-full h-1/2 bg-linear-to-t from-orange-900/20 to-transparent rounded-b-[60px] sm:rounded-b-[80px] md:rounded-b-[100px] pointer-events-none"></div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-md sm:text-xl md:text-3xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Scale Your Brand with a Partner Who Invests in You<br/><br className='block sm:hidden'/>
                Your dedicated team for eCommerce acceleration
              </h2>
            </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 
  gap-6 md:gap-8 lg:gap-10
  max-w-6xl mx-auto px-4 md:px-8">

  {[
    { id: '01', title: 'INTELLIGENCE', icon: '/intelligence.png', desc: 'We utilize advanced analytics to decode sales velocity, consumer intent, and category trends. This deep-dive intelligence allows us to deploy custom strategies that position your brand exactly where the demand is highest.' },
    { id: '02', title: 'CAPITAL', icon: '/earning.png', desc: 'We act as a strategic investor, fueling your operations through substantial wholesale purchase orders and funded advertising initiatives. Leveraging our extensive vendor network and history of $100M+ in revenue generation.' },   
    { id: '03', title: 'LOGISTICS', icon: '/logistic.png', desc: 'We transform your supply chain into a competitive advantage. Our infrastructure is engineered for speed, accuracy, and seamless scalability, ensuring your inventory moves efficiently from our docks to the customer’s door. We manage the entire lifecycle with advanced tracking systems that eliminate delays, no matter the product size.' },
    { id: '04', title: 'SUPPORT', icon: '/customer support.png', desc: 'We handle the complexities of returns and customer communication so you don’t have to. Our systems are designed to maximize uptime and minimize friction, ensuring seamless inventory flow and rapid shipping, giving you the freedom to scale without the operational noise.' },
  ].map((service) => (
    
    <div key={service.id} className="relative group">
      
      <div className="bg-[#121212] backdrop-blur-md border 
        border-gray-400 rounded-2xl sm:rounded-3xl 
        p-5 sm:p-6 md:p-7 lg:p-8
        shadow-[inset_0_4px_15px_rgba(255,255,255,0.2)]
        transition-all duration-300
        hover:shadow-[0_0_40px_rgba(255,170,0,0.35)]
        hover:border-orange-500/60 hover:scale-[1.02]
        active:scale-95 cursor-pointer">

        {/* ID Badge */}
        <div className="absolute 
          -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-5 md:-left-5
          w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
          flex items-center justify-center
          text-xs sm:text-sm md:text-lg font-medium text-white
          rounded-full border border-gray-400/70
          bg-[#121212] -rotate-14
          shadow-[inset_0_4px_15px_rgba(255,255,255,0.2)]">
          {service.id}
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
          <img 
            src={service.icon} 
            alt={service.title} 
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-white 
          text-base sm:text-lg md:text-xl lg:text-2xl 
          text-center tracking-widest uppercase mb-2 sm:mb-3 md:mb-4">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white 
          text-xs sm:text-sm md:text-base 
          text-center leading-relaxed 
          mt-2 md:mt-3">
          {service.desc}
        </p>

      </div>
    </div>

  ))}
</div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-5 sm:py-10 md:py-10 lg:py-10 md:items-start sm:items-start text-center">
          <div className="flex flex-wrap justify-center mb-2 sm:mr-20 md:mr-40 lg:mr-80">
            <span className="bg-[#FF8D28] px-2 py-1 font-medium text-[10px] sm:text-xs md:text-sm lg:text-lg">LAUNCH YOUR NEXT CHAPTER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8 sm:mb-10 md:mb-12 lg:mb-16">Your Roadmap to Revenue</h2>
          <p className="text-white -mt-6 sm:-mt-8 md:-mt-10 tracking-widest text-[10px] sm:text-xs md:text-sm px-4">
            Hover over the milestones below to explore the key phases of our <br className="hidden sm:block"/> integration process.
          </p>

          <div className="relative text-white mt-8 sm:mt-10 md:mt-12 lg:mt-20">
          

          <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 flex justify-center">
  
<div className="w-full max-w-6xl px-4 flex items-center">    
  
     {/* Icon 1 */}
   {/* Icon 1 */}
<div className="flex items-center w-full">
  
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 active:scale-95 hover:scale-110 cursor-pointer rounded-full border-2 border-[#FF8D28] bg-[#2a0f04] flex items-center justify-center shadow-[0_0_10px_#FF8D28] z-10">
      <img src="/money bag.png" className="w-6 sm:w-8 md:w-10 object-contain" />
    </div>

    <p className="text-white text-[10px] sm:text-xs md:text-sm mt-2 text-center whitespace-nowrap">
      Investment
    </p>
  </div>

  <div className="flex-1 h-[2px] bg-[#FF8D28]"></div>
</div>

{/* Icon 2 */}
<div className="flex items-center w-full">
  
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 active:scale-95 hover:scale-110 cursor-pointer rounded-full border-2 border-[#FF8D28] bg-[#2a0f04] flex items-center justify-center shadow-[0_0_10px_#FF8D28] z-10">
      <img src="/brain.png" className="w-6 sm:w-8 md:w-10 object-contain" />
    </div>

    <p className="text-white text-[10px] sm:text-xs md:text-sm mt-2 text-center whitespace-nowrap">
      Strategy
    </p>
  </div>

  <div className="flex-1 h-[2px] bg-[#FF8D28]"></div>
</div>

{/* Icon 3 */}
<div className="flex items-center w-full">
  
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 active:scale-95 hover:scale-110 cursor-pointer rounded-full border-2 border-[#FF8D28] bg-[#2a0f04] flex items-center justify-center shadow-[0_0_10px_#FF8D28] z-10">
      <img src="/delivery truck.png" className="w-6 sm:w-8 md:w-10 object-contain" />
    </div>

    <p className="text-white text-[10px] sm:text-xs md:text-sm mt-2 text-center whitespace-nowrap">
      Logistics
    </p>
  </div>

  <div className="flex-1 h-[2px] bg-[#FF8D28]"></div>
</div>

{/* Icon 4 */}
<div className="flex items-center">
  
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 active:scale-95 hover:scale-110 cursor-pointer rounded-full border-2 border-[#FF8D28] bg-[#2a0f04] flex items-center justify-center shadow-[0_0_10px_#FF8D28] z-10">
      <img src="/headphone.png" className="w-6 sm:w-8 md:w-10 object-contain" />
    </div>

    <p className="text-white text-[10px] sm:text-xs md:text-sm mt-2 text-center whitespace-nowrap">
      Support
    </p>
  </div>


    </div>

  </div>
</div>
          </div>
          <div>
            <p className='text-white tracking-widest text-[10px] sm:text-xs md:text-sm mt-8 sm:mt-10 md:mt-12 lg:mt-16 px-4'>
              Partner with us today to transform your eCommerce strategy into <br className="hidden sm:block"/> a scalable success story
            </p>
          </div>
        </section>

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
}