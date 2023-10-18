import * as React from 'react';
import { IconProps } from '../../types';

export default function FacebookIcon({
  className,
  currentcolor = '#FFCE89',
}: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_508_1112)">
        <path
          d="M16.5 9C16.5 4.86 13.14 1.5 9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 12.63 4.08 15.6525 7.5 16.35V11.25H6V9H7.5V7.125C7.5 5.6775 8.6775 4.5 10.125 4.5H12V6.75H10.5C10.0875 6.75 9.75 7.0875 9.75 7.5V9H12V11.25H9.75V16.4625C13.5375 16.0875 16.5 12.8925 16.5 9Z"
          fill={currentcolor}
        />
      </g>
      <defs>
        <clipPath id="clip0_508_1112">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
