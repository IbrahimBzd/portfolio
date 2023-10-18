import Page from './index';
import privateRoutes from '../../entrypoint/ProtectedApp/privateRoutes';

export const ContactPageRouteConfig = Object.freeze({
  path: privateRoutes.app.contactPath,
  ComponentProps: {},
  Component: Page,
});
