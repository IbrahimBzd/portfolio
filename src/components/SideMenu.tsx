import * as React from 'react';
import ToogleNavIcon from '../assets/icons/ToogleNavIcon';
import { navigationItems, socialMediaIcons } from '../page/data/sideMenu';
import { Context } from '../core/Context';
import './styles.scss';

function SideMenu() {
  const refsContext = React.useContext(Context);
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  window.addEventListener('keypress', (e) => {
    if (
      (e.key === 'c' && e.shiftKey === true) ||
      (e.key === 'C' && e.shiftKey === true)
    ) {
      e.preventDefault();
      setIsMenuVisible(false);
    }
    if (
      (e.key === 'o' && e.shiftKey === true) ||
      (e.key === 'O' && e.shiftKey === true)
    ) {
      e.preventDefault();
      setIsMenuVisible(true);
    }
  });

  function NavigationIconsMapper() {
    return navigationItems(refsContext)?.map((item) => {
      const Icon = item?.icon;
      return (
        <li key={item?.id}>
          <button
            className="bg-transparent border-none"
            type="button"
            onClick={item?.onClick}
          >
            <Icon className="w-6 sm:w-8 h-7 mb-6 sm:mb-10 menu-icon" />
          </button>
        </li>
      );
    });
  }

  return (
    <div className="w-14 fixed top-0 left-0 z-10">
      <div className="bg-tertiary w-full h-14 flex justify-center items-center open-sideManu-button-container">
        <button
          onClick={() => setIsMenuVisible((prev) => !prev)}
          type="button"
          className="p-0 m-0 overflow-visible text-white bg-transparent border-none "
        >
          <ToogleNavIcon className="w-6 h-6 toggle-menu-icon" />
        </button>
      </div>
      <div
        className={`${
          isMenuVisible ? 'translate-x-[0px]' : '-translate-x-full'
        } sm:pt-10 pt-4 mt-1 bg-tertiary w-full side-menu h-full transition-all flex
        flex-col justify-around sm:justify-between relative !min-h-[550px]`}
      >
        <ul className="flex flex-col justify-center items-center">
          {NavigationIconsMapper()}
        </ul>

        <ul className="flex flex-col justify-center items-center">
          {socialMediaIcons()?.map((item) => {
            const Icon = item?.icon;
            return (
              <li>
                <a
                  target="_blank"
                  aria-label="Hello, it's me, Ibrahim"
                  href={item?.link}
                >
                  <Icon className="w-6 h-6 mb-6 menu-icon" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
