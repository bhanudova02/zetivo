import { HiInboxStack } from 'react-icons/hi2';
import { aboutData } from '../lib/data';
import {FaInstagram,FaLinkedinIn,FaXTwitter,FaGithub,} from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import TechStackCollapse from './TechStackCollapse';

export function AboutComponent() {
  return (
    <div className='my-5 md:my-7'>
      <div className='py-8 md:py-10'>
        <div className='flex lg:flex-row flex-col gap-10'>
          <div className='w-full lg:w-[30%]'>
            <h1 className='font-bold text-4xl md:text-5xl mb-14 text-[#212121]'>
              {aboutData.intro}
            </h1>
            <div className='space-y-2'>
              <div className='text-2xl'>Email :</div>
              <div className='text-[#E85A71] text-lg'>{aboutData.email}</div>
            </div>
            <div className='mt-6 space-y-2'>
              <div className='text-2xl'>Say Hello :</div>
              <div className='flex items-center space-x-2.5'>
                <span>
                  <FaInstagram className='text-4xl text-[#E85A71]' />
                </span>
                <span>
                  <FaLinkedinIn className='text-4xl text-[#E85A71] scale-blink' />
                </span>
                <span>
                  <FaXTwitter className='text-4xl text-[#E85A71]' />
                </span>
                <span>
                  <FaGithub className='text-4xl text-[#E85A71]' />
                </span>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-[70%]'>
            <div className='space-y-6'>
              <p className='text-[20px] font-semibold text-gray-500'>
                {aboutData.about1}
              </p>
              <p className='text-[20px] font-semibold text-gray-500'>
                {aboutData.about2}
              </p>
              <p className='text-[20px] font-semibold text-gray-500'>
                {aboutData.about3}
              </p>
            </div>
            <div className='mt-6'>
              <h3 className='font-semibold text-lg text-gray-400'>
                view my resume
              </h3>
              <button className='flex items-center bg-[#E85A71] font-semibold text-white px-4 py-2 rounded-md mt-2'>
                Resume <IoDocumentTextOutline />
              </button>
              <TechStackCollapse />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
