import { ComponentClass, FunctionComponent } from 'react';

export type XQuizRoute<Props> = {
  path: string;
  Component: FunctionComponent<any> | ComponentClass<any, any>;
  ComponentProps: Props;
};