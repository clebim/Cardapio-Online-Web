import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiHome, FiLogOut } from 'react-icons/fi';
import * as Yup from 'yup';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import getValidationErrors from '../../../../utils/getValidationErros';
import { FormProps, LoginProps } from '../..';
import { AnimatedContainer } from '../../styles';

const LoginForm: React.FC<FormProps> = ({
  setFormIndex,
  formIndex,
  fromBack,
  setFromBack,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [values, setValues] = useState<LoginProps>({} as LoginProps);

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
        });

        // await schema.validate(data, { abortEarly: false });
        setFromBack(false);
        setFormIndex(formIndex + 1);
      } catch (error) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);

        setTimeout(() => {
          formRef.current?.setErrors({});
        }, 3000);
      }
    },
    [formIndex, setFormIndex, setFromBack],
  );

  return (
    <AnimatedContainer from={fromBack}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Dados de login</h1>
        <Input
          type="text"
          placeholder="Nome do restaurante"
          icon={FiHome}
          id="restaurant_name"
          name="restaurantName"
        />
        <Input
          type="text"
          id="email"
          icon={FiMail}
          placeholder="Email"
          name="email"
        />
        <Input
          type="password"
          id="password"
          icon={FiLock}
          placeholder="Senha"
          name="password"
        />
        <Input
          type="password"
          id="password_confirmation"
          icon={FiLock}
          placeholder="Confirmação da senha"
          name="passwordConfirmation"
        />

        <Button type="submit" loading={false}>
          Próximo
        </Button>
      </Form>
    </AnimatedContainer>
  );
};

export default LoginForm;
