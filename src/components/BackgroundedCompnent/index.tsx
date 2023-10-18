import * as React from 'react';

export default function BackgrounderComponent({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-start items-center bg-tertiary">
        {children}
      </div>
    </div>
  );
}
