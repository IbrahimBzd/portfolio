import * as React from 'react';
import CustomCard from '../../../../components/ServiceCard';
import ResponsiveCarousel from '../../../../components/ResponsiveServicesCarousel';
import { services } from '../../data';

function Services({ reference }) {
  return (
    <div ref={reference} className="flex flex-col justify-start items-center ">
      <div
        className="px-5 xl:px-44 py-10 sm:py-20 !pb-20
        w-full flex flex-col justify-start items-center gap-0 sm:gap-10"
      >
        <span className="my-6 text-3xl lg:text-5xl text-white font-inter font-black tracking-wider">
          My <span className="text-primary">Services</span>
        </span>
        <ResponsiveCarousel>
          {services?.map((service) => (
            <CustomCard
              key={service.id}
              title={service?.title}
              content={service?.content}
            />
          ))}
        </ResponsiveCarousel>
      </div>
    </div>
  );
}

export default Services;
