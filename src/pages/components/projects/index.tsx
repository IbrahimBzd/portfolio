import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { formattedMessages } from '../../../utils/formattedMessages';
import ResponsiveCarousel from '../../../components/ResponsiveProjectsCarousel';
import ProjectCard from '../../../components/ProjectCard';
// @ts-ignore
import projectImg from '../../../assets/imgs/project.jpg';

function Projects({ reference }) {
  const { t } = useTranslation();
  const services = Object.freeze([
    {
      img: projectImg,
      title: 'E-comerce application',
      date: '25 October, 2023',
    },
    { img: projectImg, title: 'Map web application', date: '25 October, 2023' },
    { img: projectImg, title: 'Customer Portfolio', date: '25 October, 2023' },
    { img: projectImg, title: 'Web application', date: '25 October, 2023' },
    { img: projectImg, title: 'Web application', date: '25 October, 2023' },
    { img: projectImg, title: 'Web application', date: '25 October, 2023' },
  ]);

  return (
    <div
      ref={reference}
      className="flex flex-col justify-start items-center w-full py-12"
    >
      <div className="px-5 md:px-12 lg:px-24 py-5 sm:py-10 w-full flex flex-col justify-start items-center gap-10">
        <span className="text-3xl lg:text-5xl text-white font-inter font-black tracking-wider">
          {t(formattedMessages.my)}{' '}
          <span className="text-primary">{t(formattedMessages.projects)}</span>
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
