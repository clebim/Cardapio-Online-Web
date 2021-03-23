import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FaRoad, FaSortNumericUp, FaMapMarker, FaCity } from 'react-icons/fa';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { ButtonBack, ContainerButtons } from './styles';
import { AnimatedContainer } from '../../styles';
import {
  useRegister,
  AddressProps,
} from '../../../../contexts/RegisterContext';
import getValidationErrors from '../../../../utils/getValidationErros';

const AddressForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {
    setFormIndex,
    formIndex,
    fromBack,
    setFromBack,
    setAddressData,
    addressData,
  } = useRegister();

  const handleBackForm = useCallback(() => {
    setFromBack(true);
    setFormIndex(formIndex - 1);
  }, [setFormIndex, formIndex, setFromBack]);

  const handleSubmit = useCallback(
    async (data: AddressProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          city: Yup.string().required('Cidade é obrigatório'),
          neighborhood: Yup.string().required('Bairro obrigatório'),
          street: Yup.string().required('Rua é obrigatório'),
          number: Yup.number()
            .required('Número é obrigatório')
            .typeError('Deve ser um número'),
        });

        await schema.validate(data, { abortEarly: false });
        setAddressData(data);
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
    [setFormIndex, formIndex, setFromBack, setAddressData],
  );

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
          defaultValue={addressData && addressData.city}
        />
        <Input
          type="text"
          id="neighborhood"
          icon={FaMapMarker}
          placeholder="Bairro"
          name="neighborhood"
          defaultValue={addressData && addressData.neighborhood}
        />
        <Input
          type="text"
          id="street"
          icon={FaRoad}
          placeholder="Rua"
          name="street"
          defaultValue={addressData && addressData.street}
        />
        <Input
          type="text"
          id="number"
          icon={FaSortNumericUp}
          placeholder="Numero"
          name="number"
          defaultValue={addressData && addressData.number}
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
