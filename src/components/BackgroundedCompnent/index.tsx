import * as React from 'react';

export default function BackgrounderComponent({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <div className="bg-tertiary">
      <div className="flex flex-col justify-start items-center">
        <div className="arrow-down-secondary" />
        {children}
      </div>
    </div>
  );
}
