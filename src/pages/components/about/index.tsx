import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { formattedMessages } from '../../../utils/formattedMessages';
import aboutSticker from '../../../assets/svgs/aboutSticker.svg';

export default function About({ reference }) {
  const { t } = useTranslation();
  return (
    <div
      ref={reference}
      className="w-full px-5 md:px-12 lg:px-28 pt-5 pb-10 sm:pt-10 sm:pb-20 flex flex-col lg:flex-row justify-start items-center gap-8"
    >
      <span className="w-fit lg:w-4/12 flex items-center justify-center">
        <img
          src={aboutSticker}
          alt="About Sticker"
          className="w-3/5 sm:w-4/5 lg:w-full xl:w-9/12 "
        />
      </span>
      <p
        className="w-full lg:w-8/12 text-white py-0 !m-0 text-base sm:text-lg md:text-xl lg:text-base xl:text-xl xxl:text-2xl
        font-thin tracking-wider md:tracking-widest lg:tracking-wider xl:tracking-widest leading-relaxed md:leading-loose
        lg:!leading-[1.7] xxl:leading-loose xxl:pl-0 xxl:pr-20"
      >
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xxl:text-7xl inline-block">
          {t(formattedMessages.hello)}
        </span>
        {t(formattedMessages.firstParag)}{' '}
        <span className="text-primary font-semibold">
          {t(formattedMessages.fullstackDev)}
        </span>{' '}
        {t(formattedMessages.secondParag)}
      </p>
    </div>
  );
}
