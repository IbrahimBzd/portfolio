import Page from './index';
import privateRoutes from '../entrypoint/ProtectedApp/privateRoutes';

export const PageRouteConfig = Object.freeze({
  path: privateRoutes.app.path,
  ComponentProps: {},
  Component: Page,
});
