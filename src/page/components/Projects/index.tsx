import * as React from 'react';
import './styles.scss';
import { projectsMock } from '../../data/projects';

function Projects() {
  return (
    <div className="pt-20 sm:pl-28 pl-12">
      <h1
        className="font-[Poppins] font-bold text-primary lg:text-6xl xs:text-5xl
        text-4xl xs:mb-14 mb-6"
      >
        Projects :
      </h1>
      <div
        className="grid grid-cols-1 gap-y-6 md:grid-cols-3 xxl:grid-cols-4 py-5 -ml-8
        projects-container pl-8 pr-16"
      >
        {projectsMock.map((prjct) => (
          <div
            key={prjct?.id}
            className="projects w-full md:w-4/5 overflow-hidden flex justify-center items-center relative"
          >
            <img
              id={`elem-${prjct.id}`}
              src={prjct?.projectBgImg}
              alt="project 1"
              className="h-full w-full"
            />
            <a href={prjct?.url} target={prjct?.url && '_blank'}>
              <div
                className="absolute top-0 h-full w-full left-0 flex
              flex-col justify-around  px-4 project-card-content"
              >
                <h1 className="text-white text-2xl w-max ">{prjct?.name}</h1>
                <p className="w-full text-base text-white">
                  {prjct?.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
