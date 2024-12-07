import { TbCodeCircle2Filled } from 'react-icons/tb';
export function FooterComponent() {
  return (
    <div className='mt-7 bg-[#212121] text-white border-b-4 border-[#E85A71]'>
      <div className='py-20  container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-6'>
          <h1 className='font-semibold text-3xl md:text-4xl flex items-end '>
            Thanks for visiting! <TbCodeCircle2Filled />
          </h1>
          <p className='w-full md:w-[30%] text-lg md:text-xl'>
            Have questions, comments, or feedback?
            <br />
            We’d love to hear from you, don’t hesitate to reach out!
          </p>
          <p className='text-[#E85A71] font-semibold text-lg'>
            © Zetivo - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
