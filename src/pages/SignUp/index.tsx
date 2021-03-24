import React, { useCallback, useRef, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, Background, Step, NumberStep } from './styles';
import LoginForm from './components/LoginForm';
import AddressForm from './components/AddressForm';
import InformationForm from './components/InformationForm';
import { useRegister } from '../../contexts/Register/RegisterContext';

const SignUp: React.FC = () => {
  const { formIndex } = useRegister();
  const forms = [<LoginForm />, <AddressForm />, <InformationForm />];

  return (
    <Container>
      <Content>
        <Step>
          <NumberStep isActive={formIndex === 0}>1</NumberStep>
          <NumberStep isActive={formIndex === 1}>2</NumberStep>
          <NumberStep isActive={formIndex === 2}>3</NumberStep>
        </Step>

        {forms[formIndex]}

        <Link to="/sign_in">
          {' '}
          <FiLogOut size={20} />
          Voltar para login ?
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignUp;
