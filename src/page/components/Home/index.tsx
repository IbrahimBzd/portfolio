import * as React from 'react';
import './styles.scss';
import SideMenu from '../../../components/SideMenu';
import Tip from '../../../components/Tip';
import TipModal from '../../../components/TipModal';

function Home() {
  const [isTipVisible, setIsTipVisible] = React.useState(false);
  const onTipClick = () => {
    setIsTipVisible((prev) => !prev);
  };

  return (
    <div className="home relative">
      <TipModal
        isModalVisisble={isTipVisible}
        className="fixed top-10 sm:top-12 right-14 sm:right-[70px]
        px-6 py-3 rounded-lg w-40 xs:w-auto z-10"
      />
      <Tip
        onclick={() => onTipClick}
        className="rounded-full fixed bg-primary right-6 top-2 p-2 tip z-10"
      />
      <SideMenu />
      <div className="flex items-center ml-6 sm:ml-20">
        <div className="pb-20 pt-6">
          <h1
            className="xl:text-8xl md:text-7xl sm:text-6xl
            xs:text-5xl text-4xl text-white mb-2 font-[Inter] font-bold
            tracking-wide"
          >
            Hello world
          </h1>
          <h1
            className="xl:text-7xl md:text-6xl sm:text-5xl
            xs:text-4xl text-3xl text-white mb-1 font-[Inter] font-bold
            tracking-wide"
          >
            I'm{' '}
            <span
              className="xl:text-8xl md:text-7xl sm:text-6xl
              xs:text-5xl text-4xl text-secondary tracking-widest"
            >
              Ibrahim
            </span>
          </h1>
          <p
            className="text-white font-[system-ui] font-light
            xlg:text-4xl md:text-3xl sm:text-2xl xs:text-lg xl:w-[500px]
            md:w-[400px] sm:w-[300px] tracking-wide xs:w-[250px] w-[200px]"
          >
            I’m a designer and a front-end developer.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[5%] sm:right-16 xs:right-8 right-2 -z-10">
        <h1
          className="text-primary text-right font-[Poppins]
          font-black xs:tracking-widest tracking-normal xl:text-[28px] md:text-[22px]
          sm:text-[17px] xs:text-sm text-[14px]"
        >
          Is the black whole bothering you ?<br />
          <span className="xl:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-[24px] tracking-normal">
            Scroll to remove it !
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
