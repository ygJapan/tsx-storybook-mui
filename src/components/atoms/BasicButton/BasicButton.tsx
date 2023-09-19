import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button, { ButtonProps } from '@mui/material/Button';

type Props = {
  children: React.ReactNode;
};

const BasicButton: React.FC<ButtonProps & Props> = ({
  children,
  ...props
}) => {
  return (
      <Button {...props}>{children}</Button>
  );
}

export default BasicButton