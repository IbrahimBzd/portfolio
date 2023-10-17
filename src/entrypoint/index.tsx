import * as React from 'react';
import AppProviders from './Providers';
import './App.scss';
import ProtectedApp from './ProtectedApp';

export default function App() {
  return (
    <React.Suspense fallback="Loading...">
      <AppProviders>
        <ProtectedApp />
      </AppProviders>
    </React.Suspense>
  );
}
