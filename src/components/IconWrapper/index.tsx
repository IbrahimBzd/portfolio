import * as React from 'react';

type IconWrapperProps = {
  icon: Function;
  // eslint-disable-next-line react/require-default-props
  width?: number;
  // eslint-disable-next-line react/require-default-props
  height?: number;
  className?: string;
  containerClassName?: string;
};

function IconWrapper({ icon: Icon, ...rest }: IconWrapperProps) {
  return (
    <div className={`w-6 ${rest?.containerClassName}`}>
      <Icon {...rest} />
    </div>
  );
}

export default IconWrapper;
