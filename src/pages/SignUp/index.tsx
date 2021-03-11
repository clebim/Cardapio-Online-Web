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

export interface FormProps {
  formIndex: number;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  fromBack: boolean;
  setFromBack: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LoginProps {
  restaurantName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [formIndex, setFormIndex] = useState(0);
  const [fromBack, setFromBack] = useState(false);
  const [values, setValues] = useState({});

  const forms = [
    <LoginForm
      setFormIndex={setFormIndex}
      formIndex={formIndex}
      setFromBack={setFromBack}
      fromBack={fromBack}
    />,
    <AddressForm
      setFormIndex={setFormIndex}
      formIndex={formIndex}
      setFromBack={setFromBack}
      fromBack={fromBack}
    />,
    <InformationForm
      setFormIndex={setFormIndex}
      formIndex={formIndex}
      setFromBack={setFromBack}
      fromBack={fromBack}
    />,
  ];

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
