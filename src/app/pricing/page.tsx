
import { FiPhoneCall, FiLinkedin,  } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import { MdDoNotDisturbOn } from "react-icons/md";
import { FaCheck } from 'react-icons/fa'


const pricing = () => {
  return (
    <div className="relative min-h-screen transition-colors text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
    
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

 <div className="mt-28 text-center">
            <h2 className="text-3xl md:text-5xl drop-shadow-amber-600/40 drop-shadow-lg font-medium text-[#FF8D28]">COST is NON Existent</h2>
            <p className="text-sm whitespace-nowrap mt-2 md:text-xl">The reality is, you profit from us.<br className="block sm:hidden"/> We are dead serious about this model.<br/>Dive into the logistics in the section that follows.</p>
</div>
 <div className="mt-40 text-center">
            <h2 className="text-3xl md:text-5xl drop-shadow-amber-600/40 drop-shadow-lg font-medium text-[#FF8D28]">Rise Above the Chaos</h2>
            <p className="text-sm whitespace-nowrap mt-2 md:text-xl">The reason our framework provides <br className="block sm:hidden"/> superior results compared to<br/>alternative platforms.</p>
</div>

   <div className="
  w-full
  max-w-6xl
  mx-auto

  mt-10 sm:mt-14 md:mt-20

  p-1 sm:p-6 md:p-8 lg:p-10

  flex items-center justify-center

  rounded-4xl sm:rounded-3xl md:rounded-4xl

  border border-white/20 border-b-[#EEFF00]/40

  shadow-[inset_0_-10px_30px_rgba(96,40,9,0.5)]

  bg-gradient-to-b from-[#121212] to-[#2e1111]

  min-h-[150px] sm:min-h-[200px] md:min-h-[250px]
">
      <div className="w-full max-w-6xl">
        {/* Outer Border Container */}
        <div className="relative p-[2px] rounded-4xl border shadow-[inset_0_-10px_30px_rgba(96,40,9,5)] border-b-[#EEFF00]/40 border-white/20 bg-linear-to-b from-[#121212] to-[#2e1111] shadow-2xl">
          
          {/* Inner Container with Grid Lines */}
          <div className="relative rounded-[28px] bg-linear-to-b from-[#121212] to-[#2e1111] overflow-hidden">
            
            {/* Cody Commerce Overlay Column - Positioned Absolutely */}
           <div className="absolute
  left-[22%] sm:left-[21%]
  
  top-0 bottom-5 
  w-[20%] sm:w-[20%] 
  z-20 pointer-events-none">

  <div className="h-full flex flex-col rounded-[28px] 
    bg-gradient-to-b from-[#F27507] to-[#5E2F06] 
    border border-yellow-300/60
    shadow-[0_0_25px_rgba(255,200,0,0.25),inset_0_-10px_25px_rgba(0,0,0,0.4)]">

    {/* HEADER */}
    <div className="flex items-center justify-center 
      h-16 sm:h-20 md:h-36 
      text-center px-3 
      border-b border-black/40">

      <h3 className="text-white lg:font-semibold 
        text-xs sm:text-sm lg:text-lg leading-tight">
        Cody Commerce<br />Partnership
      </h3>
    </div>

    {/* ROWS */}
    {[
      3, // row 1
      3, // row 2
      3, // row 3
      4  // row 4
    ].map((count, i) => (
      <div
        key={i}
        className="flex-1 flex flex-col items-center justify-center 
        border-b border-black/40 space-y-6 mt-15">

        {[...Array(count)].map((_, j) => (
          <span key={j} className="text-white text-xs sm:text-sm md:text-base">
            <span className="text-yellow-300 drop-shadow-[0_0_6px_#FFE100]">✔</span> Yes
          </span>
        ))}
      </div>
    ))}

  </div>
</div>

            {/* Table Content */}
            <div className="relative z-0 p-4 sm:p-6 lg:p-8">
              
              {/* Header Row */}
              <div className="grid grid-cols-5 gap-0 mb-0 border-b border-white/10">
                <div className="h-20 sm:h-24 lg:h-28 border-r border-white/10"></div>
                
                {/* Cody Commerce - Transparent to show overlay */}
                <div className="h-20 sm:h-24 lg:h-28 "></div>
                
                {/* 3P Vendor Central */}
                <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center border-r border-white/10 ">
                  <h3 className="text-gray-400  text-xs sm:text-sm lg:text-xl text-center px-2 leading-tight">
                    3P Vendor<br />Central
                  </h3>
                </div>
                
                {/* Traditional 3P Resellers */}
                <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center border-r border-white/10 ">
                  <h3 className="text-gray-400  text-xs sm:text-sm lg:text-xl text-center px-2 leading-tight">
                    Traditional 3P<br />Resellers
                  </h3>
                </div>
                
                {/* In House */}
                <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center ">
                  <h3 className="text-gray-400  text-xs sm:text-sm lg:text-xl text-center px-2 leading-tight">
                    In House
                  </h3>
                </div>
              </div>

              {/* Strategic Guidance Section */}
              <div className="border-b border-gray-700/50">
                {/* Section Header */}
                <div className="grid grid-cols-5 gap-0">
                  <div className="py-3 sm:py-6 px-0 sm:px-3 border-r border-gray-700/50 ">
                    <h4 className="text-white font-bold   text-xs sm:text-sm lg:text-lg leading-tight">
                      Strategic<br />Guidance
                    </h4>
                  </div>
                  <div className=""></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div></div>
                </div>

                {/* High Level Growth Strategy */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-2.5 border-r border-gray-700/50 flex items-center ">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">High Level Growth Strategy</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50 ">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50 ">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

                {/* 1:1 Dedicated Expert */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">1:1 <br />Dedicated Expert</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center  bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

                {/* Strict MAP Compliance */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">Strict MAP Compliance</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center  bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>
              </div>

              {/* Sales & Brand Control Section */}
              <div className="border-b border-gray-700/50">
                {/* Section Header */}
                <div className="grid grid-cols-5 gap-0">
                  <div className="py-3 sm:py-4 px-0 sm:px-3 border-r border-gray-700/50">
                    <h4 className="text-white font-bold text-xs sm:text-sm lg:text-lg leading-tight">
                      Sales & Brand<br />Control
                    </h4>
                  </div>
                  <div className=""></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div></div>
                </div>

                {/* Complete Catalog Optimization */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">Complete Catalog Optimization</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center  bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

                {/* High Volume Purchase Order */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">High Volume Purchase Order</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center  bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

                {/* Full Data Transparency */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">Full Data Transparency</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center  bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>
              </div>

              {/* Fulfillment & Logistics Section */}
              <div className="border-b border-gray-700/50">
                {/* Section Header */}
                <div className="grid grid-cols-5 gap-0">
                  <div className="py-3 sm:py-4 px-0 sm:px-3 border-r border-gray-700/50">
                    <h4 className="text-white font-bold text-xs sm:text-sm lg:text-lg leading-tight">
                      Fulfillment &<br />Logistics
                    </h4>
                  </div>
                  <div className=""></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div></div>
                </div>

                {/* Custom Prep & Labeling */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">Custom Prep & Labeling</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center  bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

                {/* Accelerated Prime Delivery */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">Accelerated Prime Delivery</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center  bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center ">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

                {/* End to End Returns Management */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">End to End Returns Management</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center  bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>
              </div>

              {/* Ecosystem Protection Section */}
              <div>
                {/* Section Header */}
                <div className="grid grid-cols-5 gap-0">
                  <div className="py-3 sm:py-4 px-0 sm:px-3 border-r border-gray-700/50">
                    <h4 className="text-white font-bold text-xs sm:text-sm lg:text-lg leading-tight">
                      Ecosystem<br />Protection
                    </h4>
                  </div>
                  <div className=""></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div className="border-r border-gray-700/50"></div>
                  <div></div>
                </div>

                {/* Strict Platform Compliance */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">Strict Platform Compliance</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center  bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

                {/* Listing Hijacker Protection */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">Listing Hijacker Protection</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center  bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

                {/* Proactive Account Health */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3 border-r border-gray-700/50 flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">Proactive Account Health</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center  justify-center  bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3  flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>

                {/* Advance PPC & Scaling */}
                <div className="grid grid-cols-5 gap-0 border-t border-gray-700/50">
                  <div className="py-2 sm:py-3 px-0 sm:px-3  flex items-center">
                    <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm">Advance PPC & Scaling</p>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-transparent">
                    <FaCheck  />
                    <span className="text-orange-400 font-medium text-[10px] sm:text-xs">Yes</span>
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center border-r border-gray-700/50">
                    <MdDoNotDisturbOn />
                  </div>
                  <div className="py-2 sm:py-3 flex items-center text-gray-500 lg:text-xl sm:text-lg justify-center">
                    <MdDoNotDisturbOn />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
        
    </div>
<div>
            <p className='text-white text-center tracking-widest text-xs md:text-sm mt-12 md:mt-50'>
              Partner with us today to transform your eCommerce strategy into <br/> a scalable success story
            </p>
          </div>
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

  )
}

export default pricing