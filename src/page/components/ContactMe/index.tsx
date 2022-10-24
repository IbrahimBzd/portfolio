import * as React from 'react';
import './styles.scss';
import SendIcon from '../../../assets/icons/SendIcon';

function ContactMe({ referance }) {
  const [inputVal, setInputVal] = React.useState('');
  const [currentColor, setCurrentColor] = React.useState('#A3A3A3');
  React.useEffect(() => {
    if (inputVal === '') {
      setCurrentColor('#A3A3A3');
    } else {
      setCurrentColor('#7049DD');
    }
  }, [inputVal]);
  return (
    <div ref={referance} className="pt-20 sm:pl-28 pl-12">
      <h1
        className="font-[Poppins] font-bold text-primary lg:text-5xl xs:text-4xl
        text-3xl xs:mb-14 mb-6"
      >
        Contact Me :
      </h1>
      <div>
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pr-12"
          action="https://formsubmit.co/ibrahimdrissi09@gmail.com"
          method="POST"
        >
          <span className="email w-full">Email :</span>
          <input
            name="email"
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
            type="email"
            placeholder="example@mail.io"
            className="form-input w-full sm:w-[92%] mt-0 py-4 rounded-md px-3 h-12 mb-4"
            required
          />
          <span className="subject w-full">Subject :</span>
          <input
            name="_subject"
            placeholder="example: Job offer"
            className="form-input w-full sm:w-[92%] py-4 rounded-md px-3 h-12"
            required
          />
          <span className="content w-full">Message :</span>
          <textarea
            name="message"
            placeholder="Message"
            className="form-input w-full sm:w-[92%] form-text-area py-2 h-40 sm:h-50 rounded-md px-3"
            required
          />
          <button
            disabled={inputVal === ''}
            onMouseEnter={() => {
              if (inputVal !== '') setCurrentColor('#5F3CC3');
            }}
            onMouseLeave={() => {
              if (inputVal !== '') setCurrentColor('#7049DD');
            }}
            type="submit"
            className="form-submit w-fit sm:pr-10 -mt-8 sm:-mt-10 lg:-mt-14 justify-self-center"
          >
            <SendIcon
              currentColor={currentColor}
              className="h-28 w-fit sm:h-36 lg:h-48"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
