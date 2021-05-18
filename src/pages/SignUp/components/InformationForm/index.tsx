import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FaPhone, FaMapPin } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Button from '../../../../components/Button';
import { AnimatedContainer } from '../../styles';
import { ButtonBack, ContainerButtons } from '../AddressForm/styles';
import getValidationErrors from '../../../../utils/getValidationErros';
import api from '../../../../services/api';
import InputMask from '../../../../components/InputMask';
import { useRegister } from '../../../../contexts/Register/RegisterContext';
import { InformationProps } from '../../../../contexts/Register/interfaces';
import { useToast } from '../../../../contexts/Toast';

const InformationForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { addToast } = useToast();
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
          zipCode: Yup.string().required('CEP obrigatório'),
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

        history.push('/sign_in');
      } catch (error) {
        setLoading(false);
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          setTimeout(() => {
            formRef.current?.setErrors({});
          }, 3000);
        } else {
          addToast({
            type: 'error',
            title: 'Erro no registro',
            description: 'Ocorreu um error ao fazer o registro.',
          });
        }
      }
    },
    [
      setInformationData,
      setLoading,
      addressData,
      loginData,
      informationData,
      history,
      addToast,
    ],
  );

  return (
    <AnimatedContainer from={fromBack}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{ marginBottom: '150px' }}
      >
        <h1>Dados Adicionais</h1>
        <InputMask
          type="text"
          mask="(99) 999999999"
          placeholder="Telefone de contato"
          icon={FaPhone}
          id="phone"
          name="phone"
          defaultValue={informationData && informationData.phone}
        />
        <InputMask
          type="text"
          id="zipCode"
          mask="99999-999"
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
