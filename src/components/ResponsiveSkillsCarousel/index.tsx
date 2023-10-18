import * as React from 'react';
import Carousel from 'react-elastic-carousel';

export default function ResponsiveSkillsCarousel({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <div className="w-full hidden lg:block">
        <Carousel
          // showArrows={false}
          pagination={false}
          isRTL={false}
          itemsToShow={7}
          className="services-carousel"
        >
          {children}
        </Carousel>
      </div>
      <div className="w-full hidden sm:block lg:!hidden">
        <Carousel
          // showArrows={false}
          pagination={false}
          isRTL={false}
          itemsToShow={5}
          className="services-carousel"
        >
          {children}
        </Carousel>
      </div>
      <div className="w-full block sm:hidden">
        <Carousel
          showArrows={false}
          pagination={false}
          isRTL={false}
          itemsToShow={4}
          className="services-carousel"
        >
          {children}
        </Carousel>
      </div>
    </>
  );
}
