import * as React from 'react';

function ServiceCard({ title, content }: { title: string; content: string }) {
  return (
    <div
      className="!w-[290px] rounded-[0px] text-center bg-tertiary border border-primary
      flex flex-col items-center justify-start gap-6 py-5 xs:py-8 px-2 xs:px-6 h-auto"
    >
      <span className="font-dm-serif text-white text-xl xs:text-2xl tracking-wider">
        {title}
      </span>
      <span className="text-white text-xs xs:text-base font-inter font-thin tracking-wider leading-relaxed ">
        {content}
      </span>
    </div>
  );
}

export default ServiceCard;
