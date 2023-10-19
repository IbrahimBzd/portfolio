import * as React from 'react';
import CustomButton from '../CustomButton';
import './styles.scss';

function ProjectCard({
  title,
  date,
  img,
}: {
  title: string;
  date: string;
  img: string;
}) {
  return (
    <div
      className="!w-[290px] rounded-[0px] text-center bg-secondary border border-primary
      flex flex-col items-center justify-start gap-6 h-auto project-card"
    >
      <img src={img} alt={title} className="h-1/2 w-full object-cover" />
      <div className="h-1/2 flex flex-col w-full justify-between items-center gap-2 px-8 pb-6">
        <div className="flex flex-col w-full justify-between items-center px-8 gap-2">
          <span className="text-neutral-500">{date}</span>
          <span
            className="text-white text-2xl xxl:text-3xl
            font-dm-serif font-thin tracking-wider leading-normal"
          >
            {title}
          </span>
        </div>
        <CustomButton className="!mt-3">
          <a href="/" target="_blank">
            Visit project
          </a>
        </CustomButton>
      </div>
    </div>
  );
}

export default ProjectCard;
