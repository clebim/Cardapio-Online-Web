import React, { ButtonHTMLAttributes } from 'react';
import { BounceLoader } from 'react-spinners';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container
      disabled={loading}
      isLoading={Number(loading)}
      type="button"
      {...rest}
    >
      {loading ? <BounceLoader color="#ffffff" size={32} /> : children}
    </Container>
  );
};

export default Button;
