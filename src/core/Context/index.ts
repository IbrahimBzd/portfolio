import * as React from 'react';

const contextInitialVal = {
  AboutRef: undefined,
  ContactMeRef: undefined,
  SkillsRef: undefined,
  ProjectsRef: undefined,
};

export const Context = React.createContext(contextInitialVal);
