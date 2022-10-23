import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { XQuizRoute } from '../types';
import { PageRouteConfig } from '../page/rout';

type AppRoutingProps = {
  routes: string;
};

function renderRouteElement(config: XQuizRoute<any>) {
  return React.createElement(config.Component, config.ComponentProps);
}

function makeRoutePropsFromConfig(config: XQuizRoute<any>) {
  return {
    path: config.path,
    element: renderRouteElement(config),
  };
}

const GLOBAL_ROUTE_CONFIG = Object.freeze({
  APP_ROUTES_CONFIG: [makeRoutePropsFromConfig(PageRouteConfig)],
});

export default function AppRouting({ routes }: AppRoutingProps) {
  return (
    <Routes>
      {GLOBAL_ROUTE_CONFIG[routes]?.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
