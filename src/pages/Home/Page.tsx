import * as React from 'react';
import './styles.scss';
import Navbar from '../../components/Navbar';
import { Context } from '../../core/Context';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Projects from './components/projects';
import { ElementOnScreenAnimation } from '../../components/ElementOnScreenAnimation';
import BackgrounderComponent from '../../components/BackgroundedCompnent';
import Skills from './components/skills';
import Footer from '../../components/Footer';

function Page() {
  const skillsRef = React.useRef();
  const aboutRef = React.useRef();
  const servicesRef = React.useRef();
  const projectsRef = React.useRef();
  const contactMeRef = React.useRef();

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
        <div className="z-10">
          <div className="px-5 sm:px-16 lg:px-28 xl:px-44 pt-5 sm:pt-10">
            <Navbar />
            <Home />
          </div>
          <ElementOnScreenAnimation>
            <About reference={aboutRef} />
          </ElementOnScreenAnimation>

          <Services reference={servicesRef} />

          <BackgrounderComponent>
            <Projects reference={projectsRef} />
          </BackgrounderComponent>

          <Skills reference={skillsRef} />
          <Footer />
        </div>
        <div className="main opacity-30 z-[-1]" />
      </div>
    </Context.Provider>
  );
}

export default Page;
