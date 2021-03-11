import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiHome, FiMail } from 'react-icons/fi';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { FormProps } from '../..';
import { AnimatedContainer } from '../../styles';
import { ButtonBack, ContainerButtons } from '../AddressForm/styles';

const InformationForm: React.FC<FormProps> = ({
  setFormIndex,
  setFromBack,
  fromBack,
  formIndex,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleBackForm = useCallback(() => {
    setFromBack(true);
    setFormIndex(formIndex - 1);
  }, [setFormIndex, formIndex, setFromBack]);

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <AnimatedContainer from={fromBack}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Dados Adicionais</h1>
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

export default InformationForm;
