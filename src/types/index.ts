import { FunctionComponent, ComponentClass } from 'react';

export type IconProps = {
  className?: string;
  width?: string;
  height?: string;
  currentcolor?: string;
};

export type PortfolioRoute<Props> = {
  path: string;
  Component: FunctionComponent<any> | ComponentClass<any, any>;
  ComponentProps: Props;
};
