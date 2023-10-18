import * as React from 'react';
import { Button } from 'antd';

export default function CustomButton({ text }: { text: string | JSX.Element }) {
  return (
    <Button
      type="text"
      htmlType="button"
      className="!w-fit !h-fit !bg-secondary !px-7 !py-3 !rounded-[0px] !outline-none !border !border-primary
      hover:shadow-custom !transition-shadow"
    >
      <span className="!text-primary !font-inter !font-light ">{text}</span>
    </Button>
  );
}
