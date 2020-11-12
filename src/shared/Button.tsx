import React, { FC } from 'react';

type ButtonProps = {
  children?: React.ReactNode;
};

export const Button: FC = (props: React.PropsWithChildren<ButtonProps>) => {
  const { children } = props;

  return (
    <>
      <button onClick={console.log}>{children}</button>
    </>
  );
};
