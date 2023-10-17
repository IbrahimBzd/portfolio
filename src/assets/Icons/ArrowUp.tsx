import * as React from 'react';
import { IconProps } from '../../types';

export default function ArrowUp({
  className,
  currentcolor = '#E0E0E0',
}: IconProps) {
  return (
    <svg
      className={className}
      width="21"
      height="13"
      viewBox="0 0 21 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7661 0.642396C10.9096 -0.214132 9.52086 -0.214132 8.66433 0.642396L0.642395 8.66433C-0.214132 9.52086 -0.214132 10.9096 0.642395 11.7661C1.49892 12.6226 2.88763 12.6226 3.74416 11.7661L10.2152 5.29504L16.6863 11.7661C17.5428 12.6226 18.9315 12.6226 19.788 11.7661C20.6446 10.9096 20.6446 9.52086 19.788 8.66433L11.7661 0.642396Z"
        fill={currentcolor}
      />
    </svg>
  );
}
