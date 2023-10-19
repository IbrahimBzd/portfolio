import * as React from 'react';
import CustomButton from '../../../../components/CustomButton';
import homeSticker from '../../../../assets/svgs/homeSticker.svg';
import SocialMedia from '../../../../components/SocialMedia';

function Home() {
  return (
    <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[75vh]">
      <div className="flex flex-col justify-center">
        <span className="font-inter text-xl md:text-2xl lg:text-3xl xxl:text-4xl font-bold text-white block my-2">
          Hello, It's me
        </span>
        <span className="font-inter text-6xl sm:text-7xl md:text-8xl lg:text-9xl xxl:text-[10rem] font-black text-white block">
          Ibrahim
        </span>
        <span className="font-inter text-xl md:text-2xl lg:text-3xl xxl:text-4xl font-semibold text-white block mt-4 tracking-wider">
          And I'm a{'  '}
          <span className="font-inter text-xl md:text-2xl lg:text-3xl xxl:text-4xl font-semibold tracking-wider text-primary">
            Fullstack Developer
          </span>
        </span>
        <p className="font-inter text-base md:text-lg lg:text-xl font-thin tracking-wider text-white my-4">
          Welcome to my Fullstack Developer Portfolio, a space where my passion
          for technology and creativity converge.
        </p>
        <SocialMedia />
        <CustomButton>Download CV</CustomButton>
      </div>
      <div className="hidden md:flex items-center justify-end">
        <img
          src={homeSticker}
          alt="Home Sticker"
          className="w-2/3 md:w-4/5 xl:w-9/12 "
        />
      </div>
    </div>
  );
}

export default Home;
