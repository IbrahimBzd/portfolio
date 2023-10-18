import * as React from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from '../CustomButton';
import { formattedMessages } from '../../utils/formattedMessages';
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
  const { t } = useTranslation();
  return (
    <div
      className="!w-[290px] rounded-[0px] text-center bg-secondary border border-primary
      flex flex-col items-center justify-start gap-6 h-auto project-card"
    >
      <img src={img} alt={title} className="h-3/5 w-full object-cover" />
      <div className="h-2/5 flex flex-col w-full justify-between items-center gap-2 px-8 pb-12">
        <div className="flex flex-col w-full justify-between items-center px-8 gap-2">
          <span className="text-neutral-500">{date}</span>
          <span
            className="text-white text-2xl xxl:text-3xl
            font-dm-serif font-thin tracking-wider leading-relaxed"
          >
            {title}
          </span>
        </div>
        <CustomButton
          text={
            <a href="/" target="_blank">
              {t(formattedMessages.visit)}
            </a>
          }
        />
      </div>
    </div>
  );
}

export default ProjectCard;
