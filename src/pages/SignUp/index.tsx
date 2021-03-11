/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiHome, FiLogOut } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErros';

import { Container, Content, Background, Step, NumberStep } from './styles';
import LoginForm from './components/LoginForm';
import AddressForm from './components/AddressForm';
import InformationForm from './components/InformationForm';
import { useRegister } from '../../contexts/RegisterContext';

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
