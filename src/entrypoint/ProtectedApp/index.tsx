import * as React from 'react';
import { globalRoutes } from './constants';
import AppRouting from '../Routing';

function ProtectedApp() {
  return (
    <div className="scroll-y-aut">
      <AppRouting routes={globalRoutes.APP_ROUTES_CONFIG} />
    </div>
  );
}
export default ProtectedApp;
