import * as React from 'react';
import AboutSticker from '../../../assets/imgs/aboutStickers.png';

function About({ referance }) {
  return (
    <div ref={referance} className="pt-32 sm:pl-28 pl-12">
      <h1
        className="font-[Poppins] font-bold text-primary lg:text-6xl xs:text-5xl
        text-4xl xs:mb-14 mb-6"
      >
        About :
      </h1>
      <div className="flex md:flex-row flex-col ">
        <div className="lg:w-2/4 md:w-3/5 w-full pr-12 md:p-0 ">
          <h1
            className="font-[Poppins] xl:text-4xl md:text-3xl sm:text-2xl xs:text-xl
            text-lg text-tertiary !tracking-wide font-thin !leading-relaxed"
          >
            I’m an <u className="text-primary font-[PoppinsBold]">X-HUB</u>{' '}
            employee with more than{' '}
            <u className="font-[PoppinsBold]">1 year </u>
            of experience, based in{' '}
            <u className="font-[PoppinsBold]">Taounate</u>, in{' '}
            <u className="font-[PoppinsBold]">Morocco</u>, I’m doing my best to
            turn the <u className="font-[PoppinsBold]">design</u> and the
            <u className="font-[PoppinsBold]"> web-dev</u> into a special art. I
            like to learn new things, and working on a new projects to gain some
            new experience.
          </h1>
        </div>
        <div
          className="lg:w-2/4 md:w-2/5 w-full flex items-center justify-center
          md:-mt-20 xs:-mt-10 -mt-5 pr-12"
        >
          <img
            className="md:w-4/5 xs:w-2/4 w-3/4 max-w-sm"
            src={AboutSticker}
            alt="about"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
