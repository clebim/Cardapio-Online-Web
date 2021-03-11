import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaRoad, FaSortNumericUp, FaMapMarker, FaCity } from 'react-icons/fa';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { ButtonBack, ContainerButtons } from './styles';
import { AnimatedContainer } from '../../styles';
import { useRegister } from '../../../../contexts/RegisterContext';

const AddressForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { setFormIndex, formIndex, fromBack, setFromBack } = useRegister();

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
          icon={FaCity}
          id="city"
          name="city"
        />
        <Input
          type="text"
          id="neighborhood"
          icon={FaMapMarker}
          placeholder="Bairro"
          name="neighborhood"
        />
        <Input
          type="text"
          id="street"
          icon={FaRoad}
          placeholder="Rua"
          name="street"
        />
        <Input
          type="text"
          id="number"
          icon={FaSortNumericUp}
          placeholder="Numero"
          name="number"
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
