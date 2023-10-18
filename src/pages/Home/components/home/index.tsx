import * as React from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from '../../../../components/CustomButton';
import homeSticker from '../../../../assets/svgs/homeSticker.svg';
import { formattedMessages } from '../../../../utils/formattedMessages';
import SocialMedia from '../../../../components/SocialMedia';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[75vh]">
      <div className="flex flex-col justify-center">
        <span className="font-inter text-xl md:text-2xl lg:text-3xl xxl:text-4xl font-bold text-white block my-2">
          {t(formattedMessages.homeHello)}
        </span>
        <span className="font-inter text-6xl sm:text-7xl md:text-8xl lg:text-9xl xxl:text-[10rem] font-black text-white block">
          Ibrahim
        </span>
        <span className="font-inter text-xl md:text-2xl lg:text-3xl xxl:text-4xl font-semibold text-white block mt-4 tracking-wider">
          {t(formattedMessages.andIm)}{' '}
          <span className="font-inter text-xl md:text-2xl lg:text-3xl xxl:text-4xl font-semibold tracking-wider text-primary">
            {t(formattedMessages.fullstackDev)}
          </span>
        </span>
        <p className="font-inter text-base md:text-lg lg:text-xl font-thin tracking-wider text-white my-4">
          {t(formattedMessages.homeParag)}
        </p>
        <SocialMedia />
        <CustomButton>{t(formattedMessages.downloadCv)}</CustomButton>
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
