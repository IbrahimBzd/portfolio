import * as React from 'react';
import AppProviders from './Providers';
import ProtectedApp from './ProtectedApp';
import './App.scss';

export default function App() {
  return (
    <React.Suspense fallback="loading...">
      <AppProviders>
        <ProtectedApp />
      </AppProviders>
    </React.Suspense>
  );
}
