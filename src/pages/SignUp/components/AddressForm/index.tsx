import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiHome, FiLock, FiMail } from 'react-icons/fi';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { FormProps } from '../..';
import { ButtonBack, ContainerButtons } from './styles';
import { AnimatedContainer } from '../../styles';

const AddressForm: React.FC<FormProps> = ({
  setFormIndex,
  formIndex,
  setFromBack,
  fromBack,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleBackForm = useCallback(() => {
    setFromBack(true);
    setFormIndex(formIndex - 1);
  }, [setFormIndex, formIndex, setFromBack]);

  const handleSubmit = useCallback(() => {
    setFromBack(false);
    setFormIndex(formIndex + 1);
  }, [setFormIndex, formIndex, setFromBack]);

  return (
    <AnimatedContainer from={fromBack}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Dados do endereço</h1>
        <Input
          type="text"
          placeholder="Cidade"
          icon={FiHome}
          id="restaurant_name"
          name="restaurantName"
        />
        <Input
          type="text"
          id="email"
          icon={FiMail}
          placeholder="Bairro"
          name="email"
        />
        <Input
          type="password"
          id="password"
          icon={FiLock}
          placeholder="Rua"
          name="password"
        />
        <Input
          type="password"
          id="password_confirmation"
          icon={FiLock}
          placeholder="Numero"
          name="passwordConfirmation"
        />

        <ContainerButtons>
          <ButtonBack type="button" onClick={handleBackForm}>
            Voltar
          </ButtonBack>
          <Button type="submit" loading={false}>
            Próximo
          </Button>
        </ContainerButtons>
      </Form>
    </AnimatedContainer>
  );
};

export default AddressForm;
