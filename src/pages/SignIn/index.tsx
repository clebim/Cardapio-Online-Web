/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErros';

import { Container, Content, Background } from './styles';
import { AnimatedContainer } from '../SignUp/styles';
import { useAuth } from '../../contexts/Auth/AuthContext';
import { useToast } from '../../contexts/Toast';

interface LoginProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: LoginProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Deve ser um e-mail válido'),
          password: Yup.string().min(8, 'Deve ter no mínimo 8 caracteres'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          setTimeout(() => {
            formRef.current?.setErrors({});
          }, 2000);
        }

        addToast({
          type: 'error',
          title: 'Erro na autentição',
          description:
            'Ocorreu um error ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimatedContainer from={0}>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login na plataforma</h1>
            <Input
              type="text"
              placeholder="Email"
              icon={FiMail}
              label="Email"
              id="email"
              name="email"
            />
            <Input
              type="password"
              id="password"
              label="Senha"
              icon={FiLock}
              placeholder="Senha"
              name="password"
            />

            <Button type="submit" loading={false}>
              Entrar
            </Button>

            <a href="">Esqueci minha senha</a>
          </Form>
        </AnimatedContainer>

        <Link to="/sign_up">
          {' '}
          <FiLogIn size={20} />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
