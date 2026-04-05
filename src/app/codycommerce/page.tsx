
import { FiPhoneCall, FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import { TbSettings2 } from "react-icons/tb";

const codycommerce = () => {
  return (
    <div className="relative min-h-screen transition-colors text-white font-sans selection:bg-orange-500/30 ">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#4b1f00] bg-[repeating-linear-gradient(90deg,#5a2400_0px,#5a2400_60px,#4b1f00_60px,#4b1f00_120px)]">
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.7)_75%,black_100%)]">
      </div>
      
      <div className="relative z-10">
        {/* Navigation Section */}
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
<section className="relative py-12 md:py-24 overflow-hidden px-4">

  
{/* Vertical Line */}
<div className="hidden lg:block xl:block absolute left-[15%]  lg:left-[23%] xl:left-[25%] -translate-x-1/2
   lg:top-47 xl:top-42  bottom-0 
  w-0.5 bg-[#FFE100] shadow-[0_0_25px_#facc15]
  md:h-[57%] lg:h-[58%] xl:h-[58%]" />
  <div className="relative max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-28 lg:space-y-40">

    {/* ITEM 1 */}
    <div className="relative flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">

      {/* Content */}
     <div className="w-full lg:w-[60%] justify-center items-center lg:text-start px-4 lg:pr-12 order-2 sm:text-center lg:ml-60 "> 
      <h2 className="text-[#FFE100] drop-shadow-[0_0_1px_#facc15] text-lg sm:text-xl font-semibold mb-4"> 
        Marketplace Mastery & Revenue Growth </h2>
         <p className="text-xs sm:text-sm text-white leading-relaxed">
           At Cody's, we don't just list your products; we dominate the digital shelf.
           <br className="hidden sm:block"/> We aggressively manage your presence across Amazon and top
           <br className="hidden sm:block"/> eCommerce channels to maximize visibility and revenue.<br/> <br/>
            <span className="text-[#FFE100] text-base sm:text-xl mr-2">●</span> 
            Conversion-Driven Content Our content team launches and<br className="hidden sm:block"/> 
            upgrades your listings with precision. We optimize titles,<br className="hidden sm:block"/>
             bullets, and visual assets to match search algorithms,<br className="hidden sm:block"/> 
             ensuring your products convert browsers into buyers on every<br className="hidden sm:block"/>
              platform.<br/><br/> <span className="text-[#FFE100] text-base sm:text-xl mr-2">●</span> 
              Precision Advertising Our in-house advertising specialists design targeted PPC campaigns aligned with your financial goals. We continuously optimize for ROI to accelerate sales velocity and capture market share.<br/><br/> <span className="text-[#FFE100] text-base sm:text-xl mr-2">●</span> Brand Visibility Programs Cody's Commerce goes beyond the buy box. We implement strategic marketing initiatives designed to enhance your brand authority and ensure your products stand out wherever your customers are searching. </p> </div>

      {/* Icon */}
<div className="hidden lg:block xl:block  absolute left-[15%] lg:left-[22.25%] xl:left-[23.75%] 2xl:left-[18%] top-1/2 -translate-x-1/2 -translate-y-64 items-center justify-center">
  
  <div className="text-[#FFE100] drop-shadow-[0_0_8px_#facc15] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
    <TbSettings2 />
  </div>

</div>

    </div>

    {/* ITEM 2 */}
    <div className="relative flex flex-col lg:flex-row justify-center  items-center gap-6 sm:gap-8 lg:gap-12">

      {/* Icon */}
<div className="hidden lg:block xl:block  absolute left-[15%]  lg:left-[22.25%] xl:left-[23.75%] 2xl:left-[18%] top-1/2 -translate-x-1/2 -translate-y-80 items-center justify-center">
  <div className="relative flex items-center justify-center">
    {/* Dark circular background */}
    <div className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-[#231000] rounded-full z-0"></div>

    {/* Glowing blur behind icon */}
    <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400/20 blur-3xl rounded-full z-10"></div>

    {/* The icon itself */}
    <div className="relative z-20 text-[#FFE100] drop-shadow-[0_0_8px_#facc15] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
      <TbSettings2 />
    </div>
  </div>
</div>
      {/* Content */}
     <div className="w-full lg:w-[60%] justify-center items-center lg:text-start px-4 lg:pr-12 order-2 sm:text-center lg:ml-60 "> 
      <h3 className="text-[#FFE100] drop-shadow-[0_0_1px_#facc15] text-lg sm:text-xl font-semibold mb-4"> 
        Logistics, Fulfillment & Operations </h3> 
        <p className="text-xs sm:text-sm text-white leading-relaxed"> 
          At Cody's, we turn logistics into a competitive advantage. We ensure<br className="hidden sm:block"/>
           nationwide delivery that is fast, reliable, and consistent with<br className="hidden sm:block"/>
      the high standards your customers expect.<br/><br/> <span className="text-[#FFE100] text-base sm:text-xl mr-2">●</span> Strategic Warehousing Once we purchase your inventory,<br className="hidden sm:block"/> we take full responsibility for its storage and flow. We keep<br className="hidden sm:block"/> products organized and in-stock, ensuring immediate<br className="hidden sm:block"/> availability to prevent delays and missed sales opportunities.<br/><br/> <span className="text-[#FFE100] text-base sm:text-xl mr-2">●</span> Versatile Fulfillment Solutions We specialize in complexity. Whether shipping small parcels or oversized freight, our team<br className="hidden sm:block"/> handles rigorous prep, pack, and shipping protocols. We<br className="hidden sm:block"/> ensure every package meets strict marketplace compliance<br className="hidden sm:block"/> and arrives safely.<br/><br/> <span className="text-[#FFE100] text-base sm:text-xl mr-2">●</span> Full-Cycle Support & Returns We manage the entire<br className="hidden sm:block"/> post-purchase experience. From efficient reverse logistics to<br className="hidden sm:block"/> responsive customer inquiries, Cody's Commerce ensures a<br className="hidden sm:block"/> hassle-free experience that protects your brand's reputation<br className="hidden sm:block"/> and seller rating.<br/><br/> </p> </div>

    </div>

    {/* ITEM 3 */}
    <div className="relative flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">

      {/* Content */}
     <div className="w-full lg:w-[60%] justify-center items-center lg:text-start px-4 lg:pr-12 order-2 sm:text-center lg:ml-60 ">
       <h2 className="text-[#FFE100] drop-shadow-[0_0_1px_#facc15] text-lg sm:text-xl font-semibold mb-4"> 
       Accelerated Expansion & Long-Term Value</h2> 
       <p className="text-xs sm:text-sm text-white leading-relaxed">
           At Cody’s, growth isn't accidental it’s engineered. We drive your eCommerce<br/>
expansion through high-level strategy and data intelligence, custom-tailored<br/> to capitalize on your brand’s unique strengths and market dynamics.<br/><br/>

<span className="text-[#FFE100] text-base sm:text-xl mr-2">●</span> Adaptive Market Intelligence We keep your brand ahead of<br/>
the curve. By continuously monitoring sales channels for<br/>
emerging trends and algorithm shifts, Cody’s Commerce<br/>
adapts your strategy in real-time. We identify opportunities the<br/>
moment they arise to capture new market share.<br/><br/>
<span className="text-[#FFE100] text-base sm:text-xl mr-2">●</span> Dedicated Account Expertise Partnership is personal here.<br/>
You are paired with a dedicated Account Manager who deeply<br/>
understands your specific category and objectives. You get<br/>
focused support, clear communication, and a strategic ally<br/>
invested in your milestones.<br/><br/>

<span className="text-[#FFE100] text-base sm:text-xl mr-2">●</span> Exclusive Platform Opportunities Leverage our network for<br/>
your gain. Our established relationships with major sales<br/>
channels grant your brand access to exclusive beta programs,<br/>
promotional slots, and high-visibility opportunities that aren't<br/>
available to the general public.<br/><br/> </p> </div>

      {/* Icon */}
<div className="hidden lg:block xl:block absolute left-[15%]  lg:left-[22.25%] xl:left-[23.75%] 2xl:left-[18%] top-1/2 -translate-x-1/2 -translate-y-80 items-center justify-center">
  
  <div className="text-[#FFE100] drop-shadow-[0_0_8px_#facc15] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
    <TbSettings2 />
  </div>

</div>

  </div>
    
  </div>
  
</section>
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

export default codycommerce;