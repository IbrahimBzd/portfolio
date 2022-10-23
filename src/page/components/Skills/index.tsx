import * as React from 'react';
import { Progress } from 'antd';
import './styles.scss';
import { skillsMock } from '../../data/skills';

function Skills() {
  return (
    <div className="pt-32 sm:pl-28 pl-12">
      <h1
        className="font-[Poppins] font-bold text-primary lg:text-6xl xs:text-5xl
        text-4xl xs:mb-14 mb-6"
      >
        Skills :
      </h1>
      <div className="pb-20 flex justify-start grid grid-cols-1 md:grid-cols-2 lg:pr-12 ">
        {skillsMock?.map((skill) => (
          <div
            className="flex flex-col w-full md:w-4/5 pb-10 progress-container"
            key={skill?.id}
          >
            <span className="text-3xl py-4 font-[Inter] font-light text-tertiary">
              {skill?.name}
            </span>
            <Progress
              percent={skill?.prcnt}
              strokeWidth={25}
              type="line"
              strokeColor="#262734"
            />
          </div>
        ))}
      </div>
      <div className="md:text-3xl text-xl font-normal w-full text-right -mt-12 pr-20">
        Interested to learn more...
      </div>
    </div>
  );
}

export default Skills;
