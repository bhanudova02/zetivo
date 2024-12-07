import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RiSendPlaneLine } from 'react-icons/ri';
import { aboutData, contactData } from '../lib/data';

export function ContactUsComponent() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const service_id = 'service_tpqhd04';
    const template_id = 'template_lyz0dtj';
    const public_api = 'py7GH4qSvRI2IBtS_';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_api,
      })
      .then((res) => {
        setName('');
        setEmail('');
        setMessage('');
        setSuccess(true);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <div className='my-5 md:my-7'>
      <div className='py-8 md:py-10'>
        <div className='flex lg:flex-row flex-col gap-10'>
          <div className='w-full lg:w-[40%]'>
            <h1 className='font-bold text-3xl md:text-4xl text-[#212121] mb-4'>
              {contactData.collaboration}
            </h1>
            <p className='mb-14 text-xl w-[90%]'>
              {contactData.connectSocialMedia}
            </p>
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
          <div className='w-full lg:w-[60%] mt-2 md:mt-12 lg:mt-0'>
            {success && (
              <div className='bg-[#E6FAF5] border-l-4 border-[#28C76F] text-[#155724] p-6 rounded-md shadow-md'>
                <h1 className='text-3xl font-bold mb-4'>Thank You!</h1>
                <p className='text-lg'>
                  Your message has been sent successfully. Someone from our team
                  will get back to you soon.
                </p>
                <p className='mt-4 text-sm text-gray-600'>
                  Feel free to explore more on our website or connect via social
                  media!
                </p>
              </div>
            )}

            {error && (
              <div className='bg-[#FDEDED] border-l-4 border-[#E53935] text-[#721C24] p-6 rounded-md shadow-md'>
                <h1 className='text-3xl font-bold mb-4'>
                  Something Went Wrong!
                </h1>
                <p className='text-lg'>
                  We couldn't send your email. Please try again later or reach
                  out directly at{' '}
                  <span className='text-[#E85A71]'>{aboutData.email}</span>.
                </p>
                <p className='mt-4 text-sm text-gray-600'>
                  We apologize for the inconvenience!
                </p>
              </div>
            )}

            {!success && !error && (
              <div>
                <h1 className='font-semibold text-3xl md:text-4xl text-[#212121] mb-4'>
                  Contact form :
                </h1>
                <form ref={form} onSubmit={sendEmail}>
                  <dl>
                    <dt>Name</dt>
                    <dd>
                      <input
                        type='text'
                        name='from_name'
                        className='border rounded-md p-2 w-full outline-blue-500'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </dd>
                    <dt className='mt-6'>Email address</dt>
                    <dd className='mt-1'>
                      <input
                        type='email'
                        className='border rounded-md p-2 w-full outline-blue-500'
                        name='from_email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </dd>
                    <dt className='mt-6'>Message</dt>
                    <dd className='mt-1'>
                      <textarea
                        className='border rounded-md p-2 w-full outline-blue-500'
                        rows='4'
                        name='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </dd>
                  </dl>
                  <button
                    className='flex outline-white items-center gap-1 bg-[#E85A71] font-semibold text-white px-4 py-2 rounded-md mt-4'
                    type='submit'
                  >
                    Submit <RiSendPlaneLine />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
