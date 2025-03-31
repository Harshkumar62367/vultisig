import { ArrowRight, ArrowRightCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-[url(https://waiting-wrist-6f6.notion.site/image/attachment%3Ae3ac7d1a-0ad7-47c6-9034-7390c23f26e3%3ABackground_1.png?table=block&id=19123043-5592-80db-a763-c349dab75c61&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=1420&userId=&cache=v2)] pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <a href='https://airdrop.vultisig.com/leaderboard' target='_blank' className='border m-auto mb-3 border-design-border cursor-pointer hover:scale-[102%] transition w-fit px-1 py-1 rounded-full flex items-center gap-2'>
            <div className='bg-design-card text-sm text-design-accent rounded-full py-0.5 px-2'>
              Live Now
            </div>
            <div className='pr-3'>
              Go to Vultisig Airdrop <ArrowRight size={15} className="inline-block" />
            </div>
          </a>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            <p className="slogan">Regain control with the <span className='text-accent text-gradient'>Seedless, Multi-chain</span> crypto vault</p>
          </h1>

          <h3 className='text-design-accent text-xl font-medium'>OPEN-SOURCE AUDITED</h3>

          <p className="text-white/70 lg:text-lg md:text-lg text-base mb-8 lg:mt-3 md:mt-3 mt-6 max-w-2xl mx-auto">
            The ultimate self custodial multichain crypto vault, based on secure threshold secure signatures. No more seed phrases, no more single point of failure. Just you and your assets.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 ">
            {/* <Button className="bg-design-accent text-black hover:bg-design-accent-hover px-8 py-6 text-lg">Go to Airdrop</Button> */}
            <div data-aos="fade-up" data-aos-duration="700" className="group flex lg:flex-row md:flex-row flex-col lg:gap-5 md:gap-5 gap-5 mt-10 items-center">
              <button className="bg-gradient-to-r hover:scale-105 transition-all from-[#33E6BF] to-[#0439C7] text-design-dark lg:text-lg md:text-lg text-base font-medium lg:w-[14rem] md:w-[14rem] w-[19rem] py-3 rounded-2xl text-center flex items-center gap-3 justify-center">
                <span>Download App</span>
              </button>

              <button className="bg-gradient-to-r hover:scale-105 transition-all border border-design-accent text-design-accent lg:text-lg md:text-lg text-base font-medium lg:w-[14rem] md:w-[14rem] w-[19rem] py-[0.72rem] rounded-2xl text-center flex items-center gap-3 justify-center">
                <span>Know More</span>
                <ArrowRightCircle className="text-[0px] transition-all ease-in-out group-has-[button]:text-xl" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Glow effect */}
      {/* <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 rounded-full bg-gradient-circle animate-pulse-glow"></div> */}

      {/* Circle outline */}
     
    </section>
  );
};

export default HeroSection;
