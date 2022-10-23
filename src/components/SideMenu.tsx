import * as React from 'react';
import './styles.scss';
import ToogleNavIcon from '../assets/icons/ToogleNavIcon';
import HomeIcon from '../assets/icons/HomeIcon';
import InfoIcon from '../assets/icons/InfoIcon';
import ContactMeIcon from '../assets/icons/ContactMeIcon';
import FbIcon from '../assets/icons/FbIcon';
import InstaIcon from '../assets/icons/InstaIcon';
import GoogleIcon from '../assets/icons/GoogleIcon';
import PhoneIcon from '../assets/icons/PhoneIcon';

function SideMenu() {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  window.addEventListener('keypress', (e) => {
    if (e.key === 'c') {
      e.preventDefault();
      setIsMenuVisible(false);
    }
    if (e.key === 'o') {
      e.preventDefault();
      setIsMenuVisible(true);
    }
  });
  return (
    <div className="w-14 fixed top-0 left-0 z-10">
      <div className="bg-tertiary w-full h-14 flex justify-center items-center open-sideManu-button-container">
        <button
          onClick={() => setIsMenuVisible((prev) => !prev)}
          type="button"
          className="p-0 m-0 text-white bg-transparent border-none "
        >
          <ToogleNavIcon className="w-6 h-6 toggle-menu-icon" />
        </button>
      </div>
      <div
        className={`${
          isMenuVisible ? 'translate-x-[0px]' : '-translate-x-full'
        } bg-tertiary w-full side-menu h-full transition-all flex
        flex-col justify-between relative !min-h-[550px]`}
      >
        <div />
        <ul className="flex flex-col justify-center items-center">
          <li>
            <HomeIcon className="w-7 h-7 mb-10 mt-20 menu-icon" />
          </li>
          <li>
            <InfoIcon className="w-8 h-7 mb-10 menu-icon" />
          </li>
          <li>
            <ContactMeIcon className="w-8 h-6 menu-icon" />
          </li>
        </ul>

        <ul className="flex flex-col justify-center items-center">
          <li>
            <FbIcon className="w-6 h-6 mb-6 menu-icon" />
          </li>
          <li>
            <InstaIcon className="w-6 h-6 mb-6 menu-icon" />
          </li>
          <li>
            <PhoneIcon className="w-6 h-6 mb-6 menu-icon" />
          </li>
          <li>
            <GoogleIcon className="w-6 h-6 mb-2 menu-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
