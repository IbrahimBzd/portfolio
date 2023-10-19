import * as React from 'react';
import aboutSticker from '../../../../assets/svgs/aboutSticker.svg';
import BackgrounderComponent from '../../../../components/BackgroundedCompnent';

export default function About({ reference }) {
  return (
    <div className="px-5 sm:px-16 lg:px-28 xl:px-44 py-0">
      <BackgrounderComponent>
        <div
          ref={reference}
          className="w-full py-12 sm:py-24 px-8 sm:px-16 flex flex-col lg:flex-row justify-start items-center gap-8"
        >
          <span className="w-fit lg:w-3/12 flex items-center justify-center">
            <img
              src={aboutSticker}
              alt="About Sticker"
              className="w-3/5 lg:w-full xl:w-9/12 "
            />
          </span>
          <p
            className="w-full lg:w-9/12 text-white py-0 !m-0 text-base sm:text-lg md:text-xl lg:text-base xl:text-xl xxl:text-2xl
        font-thin tracking-wider md:tracking-widest lg:tracking-wider xl:tracking-widest leading-relaxed md:leading-loose
        lg:!leading-[1.7] xxl:leading-loose xxl:pl-0 xxl:pr-20"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xxl:text-7xl inline-block">
              Hello
            </span>
            , I'm Ibrahim Drissi El Bouzaidi, a passionate{' '}
            <span className="text-primary font-semibold">
              Fullstack Developer
            </span>{' '}
            on a perpetual quest to create innovative digital experiences. With
            a strong foundation in both front-end aesthetics and back-end
            functionality, I'm driven by the desire to build web solutions that
            not only look great but also perform awlessly.
          </p>
        </div>
      </BackgrounderComponent>
    </div>
  );
}
