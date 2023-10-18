import * as React from 'react';
import { Button } from 'antd';

export default function CustomButton({
  children,
  className,
  type = 'button',
  ...rest
}: {
  children: string | JSX.Element;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLElement>;
}) {
  return (
    <Button
      htmlType={type}
      className={`!w-fit !h-fit !bg-secondary !px-7 !py-3 !rounded-[0px] !outline-none !border !border-primary
      hover:shadow-custom !transition-shadow !text-primary !font-inter !font-light  ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
}
