import * as React from 'react';
import Home from './components/Home';
import BlackWhole from './components/BlackWhole';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function Page() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <BlackWhole />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Page;
