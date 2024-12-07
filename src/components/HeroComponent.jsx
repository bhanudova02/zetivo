import { BsStars } from 'react-icons/bs';
import { heroData } from '../lib/data';
import { Link } from 'react-router-dom';
export function HeroComponent() {
  return (
    <div className='my-5 md:my-7'>
      <div className='py-8 md:py-10 flex lg:flex-row flex-col '>
        <div className='space-y-4 w-full lg:w-[65%]'>
          <h2 className='text-4xl md:text-6xl leading-10 md:leading-[4rem] font-semibold w-full md:w-[80%] lg:w-[100%] mb-8'>
            <span className='text-[#E85A71]'>{heroData.greeting}</span>
            <br />
            {heroData.mainTitle}
          </h2>
          <p className='text-xl'>{heroData.description}</p>
          <Link to="/contact">
            <button className='flex items-center gap-1 text-[#E85A71] font-semibold border border-[#E85A71] rounded-3xl py-1.5 px-4'>
              <BsStars />
              {heroData.callToActionText}
            </button>
          </Link>
          <h3 className='font-bold text-[#3a383894]'>{heroData.networkPrompt}</h3>
        </div>
        <div className='w-full lg:w-[35%]'>
          <img src="/Hero.gif" alt="HeroGifImage" className='w-full h-full object-contain' />
        </div>
      </div>
    </div>
  );
}
