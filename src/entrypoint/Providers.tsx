import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AsyncStateProvider } from 'react-async-states';

type AppProvidersProps = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <BrowserRouter>
      <AsyncStateProvider>{children}</AsyncStateProvider>
    </BrowserRouter>
  );
}
