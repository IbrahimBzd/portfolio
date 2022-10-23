import * as React from 'react';
import { globalRoutes } from './constants';
import AppRouting from '../Routing';

function ProtectedApp() {
  return (
    <div>
      <AppRouting routes={globalRoutes.APP_ROUTES_CONFIG} />
    </div>
  );
}
export default ProtectedApp;
