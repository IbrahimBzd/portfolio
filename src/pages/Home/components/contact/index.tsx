import * as React from 'react';
import CustomButton from '../../../../components/CustomButton';

function CustomInput({
  name,
  type = 'text',
  refer,
}: {
  name: string;
  type?: string;
  refer: React.MutableRefObject<any>;
}) {
  return (
    <div className="form__group field w-full">
      <input
        ref={refer}
        required
        type={type}
        placeholder=""
        className="form__field"
        name={name}
        id={name}
        autoComplete="new-password"
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={name} className="form__label">
        {name}
      </label>
    </div>
  );
}

export default function Contact({ reference }) {
  const firstRef = React.useRef(null);
  const lastRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const descRef = React.useRef(null);

  return (
    <div
      ref={reference}
      className="w-full flex flex-col items-center py-0 m-0 px-6"
    >
      <span
        className="my-12 xl:my-20
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-inter font-black tracking-wider"
      >
        Contact <span className="text-primary">me</span>
      </span>
      <form
        action="https://formsubmit.co/ibrahimdrissi05@gmail.com"
        method="POST"
        className="w-full flex flex-col md:grid grid-cols-2 gap-x-8 xl:gap-x-16 gap-y-3
        lg:gap-y-6 max-w-[1100px] bg-tertiary px-6 sm:px-16 py-6 sm:py-12"
      >
        <CustomInput refer={firstRef} name="First name" />
        <CustomInput refer={lastRef} name="Last name" />
        <CustomInput refer={emailRef} name="Email" type="email" />
        <CustomInput refer={phoneRef} name="Phone number" />
        <div className="form__group field w-full col-start-1 col-end-3 ">
          <textarea
            ref={descRef}
            required
            placeholder=""
            className="form__field text-area"
            name="message"
            id="Write your message"
            autoComplete="new-password"
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="Write your message" className="form__label">
            Write your message
          </label>
        </div>
        <div className="col-start-1 col-end-3 flex justify-center md:justify-end w-full">
          <CustomButton
            type="submit"
            className="!bg-primary !text-secondary !font-semibold !px-16 !mt-4 sm:mt-0"
          >
            Send
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
