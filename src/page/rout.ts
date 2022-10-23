import privateRoutes from '../entrypoint/ProtectedApp/privateRoutes';
import Page from './index';

export const PageRouteConfig = Object.freeze({
  path: privateRoutes.page.path,
  ComponentProps: {},
  Component: Page,
});
