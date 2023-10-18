import * as React from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from '../../../components/CustomButton';
import WhatsappIcon from '../../../assets/Icons/WhatsappIcon';
import FacebookIcon from '../../../assets/Icons/FacebookIcon';
import LinkedInIcon from '../../../assets/Icons/LinkedInIcon';
import homeSticker from '../../../assets/svgs/homeSticker.svg';
import InstagramIcon from '../../../assets/Icons/InstagramIcon';
import { formattedMessages } from '../../../utils/formattedMessages';
import { ElementOnScreenAnimation } from '../../../components/ElementOnScreenAnimation';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[75vh]">
      <ElementOnScreenAnimation transition="1200ms ease-in-out">
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
          <div className="flex gap-4 pb-6 pt-2">
            <a
              target="_blank"
              href="https://www.facebook.com/ibrahim.drissi.129?_rdc=1&_rdr"
            >
              <div className="w-fit bg-tertiary rounded-full p-2 hover:cursor-pointer hover:scale-110 transition-all">
                <FacebookIcon className="w-7 h-7" />
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ibrahim-drissi-424838244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <div className="w-fit bg-tertiary rounded-full p-2 hover:cursor-pointer hover:scale-110 transition-all">
                <LinkedInIcon className="w-7 h-7" />
              </div>
            </a>
            <div className="w-fit bg-tertiary rounded-full p-2 hover:cursor-pointer hover:scale-110 transition-all">
              <InstagramIcon className="w-7 h-7" />
            </div>
            <a target="_blank" href="https://wa.me/212619548744">
              <div className="w-fit bg-tertiary rounded-full p-2 hover:cursor-pointer hover:scale-110 transition-all">
                <WhatsappIcon className="w-7 h-7" />
              </div>
            </a>
          </div>
          <CustomButton text={t(formattedMessages.downloadCv)} />
        </div>
      </ElementOnScreenAnimation>
      <ElementOnScreenAnimation>
        <div className="hidden md:flex items-center justify-end">
          <img
            src={homeSticker}
            alt="Home Sticker"
            className="w-2/3 md:w-4/5 xl:w-9/12 "
          />
        </div>
      </ElementOnScreenAnimation>
    </div>
  );
}

export default Home;
