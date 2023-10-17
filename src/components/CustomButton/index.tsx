import * as React from 'react';
import { Button } from 'antd';

export default function CustomButton({ text }: { text: string }) {
  return (
    <Button
      type="text"
      htmlType="button"
      className="!w-fit !h-fit !bg-primary !px-7 !py-3 !rounded-[5px] !outline-none !border-none hover:shadow-custom !transition-shadow"
    >
      <span className="!text-black !font-inter hover:!text-black">{text}</span>
    </Button>
  );
}
