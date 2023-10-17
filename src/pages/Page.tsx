import * as React from 'react';
import './styles.scss';
import Navbar from '../components/Navbar';
import { Context } from '../core/Context';
import Home from './components/home';
import About from './components/about';
import BackgrounderComponent from '../components/BackgroundedCompnent';
import Services from './components/services';

function Page() {
  const homeRef = React.useRef();
  const aboutRef = React.useRef();
  const servicesRef = React.useRef();
  const projectsRef = React.useRef();
  const contactMeRef = React.useRef();

  const contextMemo = React.useMemo(
    () => ({
      homeRef,
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
        <div className="z-10">
          <div ref={homeRef} className="px-5 md:px-12 lg:px-28 py-5 sm:py-10">
            <Navbar />
            <Home />
          </div>
          <BackgrounderComponent>
            <About reference={aboutRef} />
          </BackgrounderComponent>
          <Services reference={servicesRef} />
        </div>
        <div className="main opacity-30 z-[-1]" />
      </div>
    </Context.Provider>
  );
}

export default Page;
