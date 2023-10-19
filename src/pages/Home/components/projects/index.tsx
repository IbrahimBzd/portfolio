import * as React from 'react';
import ResponsiveCarousel from '../../../../components/ResponsiveProjectsCarousel';
import ProjectCard from '../../../../components/ProjectCard';
import projectImg from '../../../../assets/imgs/project.png';

function Projects({ reference }) {
  const services = Object.freeze([
    {
      img: projectImg,
      title: 'My personal portfolio',
      date: '18 October, 2023',
    },
  ]);

  return (
    <div
      ref={reference}
      className="flex flex-col justify-start items-center w-full py-12"
    >
      <div className="px-5 md:px-12 lg:px-24 py-5 sm:py-10 w-full flex flex-col justify-start items-center gap-10">
        <span className="text-3xl lg:text-5xl text-white font-inter font-black tracking-wider">
          My <span className="text-primary">Projects</span>
        </span>

        <ResponsiveCarousel>
          {services?.map((project, index) => (
            <ProjectCard
              key={Number(index) + 1}
              date={project?.date}
              title={project?.title}
              img={project?.img}
            />
          ))}
        </ResponsiveCarousel>
      </div>
    </div>
  );
}

export default Projects;
