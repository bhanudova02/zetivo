import React from 'react';
import { FaCode, FaPalette, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { servicesData, servicesHeaderData } from '../lib/data';

const icons = {
  FaCode: FaCode,
  FaPalette: FaPalette,
  FaShieldAlt: FaShieldAlt,
  FaRocket: FaRocket,
};

export function ServiceComponent() {
  return (
    <div className='my-5 md:my-7'>
      <div className='py-8 md:py-10'>
        <div className='text-center mb-16'>
          <h2 className='font-bold text-3xl md:text-4xl text-[#212121] mb-4'>
            Our <span className='text-orange-600'>Services</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-4xl mx-auto '>
            {servicesHeaderData.service}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesData.map((service, index) => {
            const IconComponent = icons[service.icon];
            return (
              <div
                key={index}
                className='group relative bg-white hover:border p-8 rounded-2xl shadow-red-400/50 shadow-lg hover:shadow-xl hover:shadow-red-600/50 transition-all duration-300 ease-in-out transform hover:-translate-y-2'
              >
                <div
                  className={`${service.color} p-3 rounded-xl inline-block mb-6`}
                >
                  <IconComponent className='w-8 h-8' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  {service.title}
                </h3>
                <p className='text-gray-600 leading-relaxed mb-4'>
                  {service.description}
                </p>
                <ul className='list-disc pl-5 text-gray-600 space-y-2'>
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
