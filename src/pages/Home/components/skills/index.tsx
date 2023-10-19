import * as React from 'react';
// @ts-ignore
import ResponsiveCarousel from '../../../../components/ResponsiveSkillsCarousel';
import { skills } from '../../data';

function Skills({ reference }) {
  return (
    <div
      ref={reference}
      className="flex flex-col justify-start items-center 
      px-0 sm:px-5 py-5 md:py-10 "
    >
      <ResponsiveCarousel>
        {skills?.map((skill, index) => (
          <img
            draggable={false}
            src={skill?.img}
            alt={(Number(index) + 1).toString()}
            className="h-10 md:h-16 object-contain"
          />
        ))}
      </ResponsiveCarousel>
    </div>
  );
}

export default Skills;
