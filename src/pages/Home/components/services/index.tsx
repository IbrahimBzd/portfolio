import * as React from 'react';
import { useTranslation } from 'react-i18next';
import CustomCard from '../../../../components/ServiceCard';
import { formattedMessages } from '../../../../utils/formattedMessages';
import ResponsiveCarousel from '../../../../components/ResponsiveServicesCarousel';

function Services({ reference }) {
  const { t } = useTranslation();
  const services = Object.freeze([
    {
      id: 1,
      title: t(formattedMessages.title1),
      content: t(formattedMessages.content1),
    },
    {
      id: 2,
      title: t(formattedMessages.title2),
      content: t(formattedMessages.content2),
    },
    {
      id: 3,
      title: t(formattedMessages.title3),
      content: t(formattedMessages.content3),
    },
    {
      id: 4,
      title: t(formattedMessages.title4),
      content: t(formattedMessages.content4),
    },
    {
      id: 5,
      title: t(formattedMessages.title5),
      content: t(formattedMessages.content5),
    },
    {
      id: 6,
      title: t(formattedMessages.title6),
      content: t(formattedMessages.content6),
    },
    {
      id: 7,
      title: t(formattedMessages.title7),
      content: t(formattedMessages.content7),
    },
  ]);

  return (
    <div ref={reference} className="flex flex-col justify-start items-center ">
      <div
        className="px-5 xl:px-44 py-10 sm:py-20 !pb-20
        w-full flex flex-col justify-start items-center gap-0 sm:gap-10"
      >
        <span className="my-6 text-3xl lg:text-5xl text-white font-inter font-black tracking-wider">
          {t(formattedMessages.my)}{' '}
          <span className="text-primary">{t(formattedMessages.services)}</span>
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
