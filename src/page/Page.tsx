import * as React from 'react';
import Home from './components/Home';
import BlackWhole from './components/BlackWhole';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import { Context } from '../core/Context';

function Page() {
  const AboutRef = React.useRef();
  const ContactMeRef = React.useRef();
  const SkillsRef = React.useRef();
  const ProjectsRef = React.useRef();
  const contextMemo = React.useMemo(
    () => ({
      AboutRef,
      ContactMeRef,
      SkillsRef,
      ProjectsRef,
    }),
    [],
  );
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Context.Provider value={contextMemo}>
      <div>
        <BlackWhole />
        <Home />
        <About referance={AboutRef} />
        <Skills referance={SkillsRef} />
        <Projects referance={ProjectsRef} />
        <ContactMe referance={ContactMeRef} />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default Page;
