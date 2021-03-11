import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaPhone, FaMapPin } from 'react-icons/fa';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { AnimatedContainer } from '../../styles';
import { ButtonBack, ContainerButtons } from '../AddressForm/styles';
import { useRegister } from '../../../../contexts/RegisterContext';

const InformationForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { setFormIndex, formIndex, fromBack, setFromBack } = useRegister();

  const handleBackForm = useCallback(() => {
    setFromBack(true);
    setFormIndex(formIndex - 1);
  }, [setFormIndex, formIndex, setFromBack]);

  const handleSubmit = useCallback(
    (data) => {
      setFromBack(false);
    },
    [setFromBack],
  );

  return (
    <AnimatedContainer from={fromBack}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Dados Adicionais</h1>
        <Input
          type="text"
          placeholder="Telefone de contato"
          icon={FaPhone}
          id="phone"
          name="phone"
        />
        <Input
          type="text"
          id="zipCode"
          icon={FaMapPin}
          placeholder="CEP"
          name="zipCode"
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
