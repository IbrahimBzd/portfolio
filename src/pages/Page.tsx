import * as React from 'react';
import './styles.scss';
import Navbar from '../components/Navbar';
import { Context } from '../core/Context';

function Page() {
  const aboutRef = React.useRef();
  const servicesRef = React.useRef();
  const projectsRef = React.useRef();
  const contactMeRef = React.useRef();

  const contextMemo = React.useMemo(
    () => ({
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
        <div className="z-10 p-5 md:px-12 lg:px-28 py-5 sm:py-10">
          <Navbar />
        </div>
        <div className="main opacity-30" />
      </div>
    </Context.Provider>
  );
}

export default Page;
