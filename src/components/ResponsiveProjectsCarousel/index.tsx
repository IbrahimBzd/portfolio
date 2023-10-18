import * as React from 'react';
import Carousel from 'react-elastic-carousel';

export default function ResponsiveProjectsCarousel({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <div className="w-full hidden xl:block">
        <Carousel isRTL={false} itemsToShow={3} className="services-carousel">
          {children}
        </Carousel>
      </div>
      <div className="w-full hidden md:block xl:hidden">
        <Carousel isRTL={false} itemsToShow={2} className="services-carousel">
          {children}
        </Carousel>
      </div>
      <div className="w-full block md:hidden">
        <Carousel
          isRTL={false}
          itemsToShow={1}
          className="services-carousel"
          showArrows={false}
        >
          {children}
        </Carousel>
      </div>
    </>
  );
}
