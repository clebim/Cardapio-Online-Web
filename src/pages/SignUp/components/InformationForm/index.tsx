import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FaPhone, FaMapPin } from 'react-icons/fa';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { AnimatedContainer } from '../../styles';
import { ButtonBack, ContainerButtons } from '../AddressForm/styles';
import {
  InformationProps,
  useRegister,
} from '../../../../contexts/RegisterContext';
import getValidationErrors from '../../../../utils/getValidationErros';
import api from '../../../../services/api';

const InformationForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const {
    setFormIndex,
    formIndex,
    fromBack,
    setFromBack,
    setInformationData,
    loginData,
    addressData,
    informationData,
  } = useRegister();

  const handleBackForm = useCallback(() => {
    setFromBack(true);
    setFormIndex(formIndex - 1);
  }, [setFormIndex, formIndex, setFromBack]);

  const handleSubmit = useCallback(
    async (data: InformationProps) => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          phone: Yup.string()
            .required('Cidade é obrigatório')
            .max(15, 'Deve ter no máximo 15 caracteres'),
          zipCode: Yup.string().required('Bairro obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });
        setInformationData(data);

        const response = await api.post('/auth/register', {
          restaurant_name: loginData.restaurantName,
          email: loginData.email,
          password: loginData.password,
          confirmation_password: loginData.passwordConfirmation,
          city: addressData.city,
          neighborhood: addressData.neighborhood,
          street: addressData.street,
          number: addressData.number,
          phone: informationData.phone,
          zip_code: informationData.zipCode,
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          setTimeout(() => {
            formRef.current?.setErrors({});
          }, 3000);
        } else {
          console.log(error.response.data.message);
        }
      }
    },
    [setInformationData, setLoading, addressData, loginData, informationData],
  );

  return (
    <AnimatedContainer from={fromBack}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{ marginBottom: '150px' }}
      >
        <h1>Dados Adicionais</h1>
        <Input
          type="text"
          placeholder="Telefone de contato"
          icon={FaPhone}
          id="phone"
          name="phone"
          defaultValue={informationData && informationData.phone}
        />
        <Input
          type="text"
          id="zipCode"
          icon={FaMapPin}
          placeholder="CEP"
          name="zipCode"
          defaultValue={informationData && informationData.zipCode}
        />

        <ContainerButtons>
          <ButtonBack type="button" onClick={handleBackForm}>
            Voltar
          </ButtonBack>
          <Button type="submit" loading={loading}>
            Cadastrar
          </Button>
        </ContainerButtons>
      </Form>
    </AnimatedContainer>
  );
};

export default InformationForm;
