import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Context } from '../../core/Context';
import Footer from '../../components/Footer';
import Navbar from '../../components/ContactNavbar';
import { formattedMessages } from '../../utils/formattedMessages';
import './styles.scss';
import CustomButton from '../../components/CustomButton';

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

function Page() {
  const { t } = useTranslation();

  const skillsRef = React.useRef();
  const aboutRef = React.useRef();
  const servicesRef = React.useRef();
  const projectsRef = React.useRef();
  const contactMeRef = React.useRef();

  const firstRef = React.useRef(null);
  const lastRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const descRef = React.useRef(null);

  const contextMemo = React.useMemo(
    () => ({
      skillsRef,
      aboutRef,
      servicesRef,
      projectsRef,
      contactMeRef,
    }),
    [],
  );

  return (
    <Context.Provider value={contextMemo}>
      <div>
        <div className="z-10 px-5 sm:px-16 lg:px-28 xl:px-44 pt-5 sm:pt-10">
          <Navbar />

          <div className="w-full flex flex-col items-center py-14 bg-tertiary mt-6 mb-12 lg:my-12 lg:mb-24 px-6 ">
            <span
              className="my-0 md:my-2 lg:my-3 xl:my-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white
              font-inter font-black tracking-wider"
            >
              {t(formattedMessages.contactTitle)}{' '}
              <span className="text-primary">{t(formattedMessages.me)}</span>
            </span>
            <form
              action="https://formsubmit.co/gagelo9995@ustorp.com"
              method="POST"
              className="w-full flex flex-col md:grid grid-cols-2 gap-x-8 xl:gap-x-16 gap-y-3
              lg:gap-y-6 pt-6 md:pt-9 lg:pt-12 px-0 max-w-[1000px]"
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
        </div>
        <Footer />
        <div className="main opacity-30 z-[-1]" />
      </div>
    </Context.Provider>
  );
}

export default Page;
