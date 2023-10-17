import * as React from 'react';

function CustomCard({ title, content }: { title: string; content: string }) {
  return (
    <div
      className="w-11/12 xs:w-[310px] rounded-[5px] text-center bg-tertiary border border-primary
      flex flex-col items-center justify-evenly gap-2 py-5 xs:py-8 px-3 xs:px-8 h-full"
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

export default CustomCard;
