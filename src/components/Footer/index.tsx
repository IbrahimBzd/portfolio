import * as React from 'react';
import BackgrounderComponent from '../BackgroundedCompnent';
import CustomButton from '../CustomButton';
import SocialMedia from '../SocialMedia';

export default function Footer() {
  return (
    <BackgrounderComponent>
      <div className="px-5 sm:px-16 lg:px-28 xl:px-44 py-5 sm:py-10 grid grid-cols-1 w-full gap-5 h-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 h-auto">
          <div className="w-full pt-6 flex items-end ">
            <span className="font-inter font-semibold text-xl sm:text-2xl lg:text-3xl text-white block ">
              Ibrahim.
            </span>
          </div>
          <div className="w-full text-center justify-start md:justify-center flex items-start">
            <span
              className="text-white text-3xl lg:text-4xl
              font-dm-serif font-thin tracking-wider leading-relaxed"
            >
              Interested?
            </span>
          </div>
          <div className="w-full md:pt-6 flex justify-start md:justify-end items-start md:items-end">
            <CustomButton className="!bg-tertiary">
              <a href="/contact">Let's talk</a>
            </CustomButton>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center pt-6 text-center">
          <SocialMedia className="bg-secondary" iconClassName="w-4 h-4" />
          <span className="text-white text-xs font-inter font-thin tracking-wider leading-relaxed">
            All rights reserved at Ibrahim. copyright {new Date().getFullYear()}{' '}
            ©
          </span>
        </div>
      </div>
    </BackgrounderComponent>
  );
}
