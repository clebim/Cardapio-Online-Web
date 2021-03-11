import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiHome, FiLogOut } from 'react-icons/fi';
import * as Yup from 'yup';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import getValidationErrors from '../../../../utils/getValidationErros';
import { AnimatedContainer } from '../../styles';
import { useRegister, LoginProps } from '../../../../contexts/RegisterContext';

const LoginForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {
    setFormIndex,
    setLoginData,
    formIndex,
    fromBack,
    setFromBack,
    loginData,
  } = useRegister();

  const handleSubmit = useCallback(
    async (data: LoginProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          restaurantName: Yup.string().required('Nome é obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Deve ser um e-mail válido'),
          password: Yup.string().min(8, 'Deve ter no mínimo 8 caracteres'),
          passwordConfirmation: Yup.string()
            .required('Confirme sua senha')
            .oneOf([Yup.ref('password'), null], 'Senhas não correspondem.'),
        });

        await schema.validate(data, { abortEarly: false });
        setLoginData(data);
        setFromBack(false);
        setFormIndex(formIndex + 1);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);

          setTimeout(() => {
            formRef.current?.setErrors({});
          }, 3000);
        }
      }
    },
    [formIndex, setFormIndex, setFromBack, setLoginData],
  );

  return (
    <AnimatedContainer from={fromBack}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Dados de login</h1>
        <Input
          type="text"
          placeholder="Nome do restaurante"
          icon={FiHome}
          id="restaurantName"
          name="restaurantName"
          defaultValue={loginData && loginData.restaurantName}
        />
        <Input
          type="text"
          id="email"
          icon={FiMail}
          placeholder="Email"
          name="email"
          defaultValue={loginData && loginData.email}
        />
        <Input
          type="password"
          id="password"
          icon={FiLock}
          placeholder="Senha"
          name="password"
          defaultValue={loginData && loginData.password}
        />
        <Input
          type="password"
          id="passwordConfirmation"
          icon={FiLock}
          placeholder="Confirmação da senha"
          name="passwordConfirmation"
          defaultValue={loginData && loginData.passwordConfirmation}
        />

        <Button type="submit" loading={false}>
          Próximo
        </Button>
      </Form>
    </AnimatedContainer>
  );
};

export default LoginForm;
