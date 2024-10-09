import memojiImage from '@/assets/images/memoji2-removebg-preview.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import Image from 'next/image';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
      <div 
        className='absolute inset-0 -z-30 opacity-5' 
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>
      <HeroOrbit size={800} rotation={-72} orbitSpeed={50} starSpeed={5}>
        <StarIcon className="size-28 text-yellow-300"/>
      </HeroOrbit>
      </div>
      
      <div className='container relative z-10'> {/* Added z-10 to ensure content is above the orbit */}
        <div className="flex flex-col items-center">
          <Image 
            src={memojiImage} 
            className="size-[180px]" 
            alt="memoji" 
          /> 
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>
              Available for new projects
            </div>
          </div>
          <div className='max-w-lg mx-auto'>
            <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Lorem Ipsum Yeah!</h1>
            <p className='mt-4 text-center text-white/60 md:text-lg'>
              I specialize in data engineering and web development. Let's discuss your next project.
            </p>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
            <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 hover:text-white transition duration-300'>
              <span className='font-semibold'>Explore My Work</span>
              <ArrowDown className="size-4"/>
            </button>
            <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
              <span>👋</span>
              <span className='font-semibold '>Get in touch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
