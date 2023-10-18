import * as React from 'react';

const contextInitialVal = {
  aboutRef: undefined,
  servicesRef: undefined,
  projectsRef: undefined,
  skillsRef: undefined,
  contactMeRef: undefined,
};
export const Context = React.createContext(contextInitialVal);
