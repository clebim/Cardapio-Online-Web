import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { useToast } from '../../../../contexts/Toast';
import api from '../../../../services/api';
import getValidationErrors from '../../../../utils/getValidationErros';

import { ModalContainer } from './styles';

interface ModalSectionProps {
  getItemsDashboard: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalItem: React.FC<ModalSectionProps> = ({
  getItemsDashboard,
  setOpen,
}) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleCreateSection = useCallback(
    async (data) => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          sectionName: Yup.string().required('Nome da seção é obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/menu_section/store', {
          section_name: data.sectionName,
        });

        getItemsDashboard();

        setLoading(false);

        addToast({
          type: 'success',
          title: 'Sucesso',
          description: 'Seção criada com sucesso',
        });

        setTimeout(() => {
          setOpen(false);
        }, 750);
      } catch (error) {
        setLoading(false);
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          setTimeout(() => {
            formRef.current?.setErrors({});
          }, 2000);
        }

        addToast({
          type: 'error',
          title: 'Erro na requisição',
          description: 'Ocorreu um error ao criar a seção.',
        });
      }
    },
    [addToast, getItemsDashboard, setOpen],
  );

  return (
    <ModalContainer>
      <Form ref={formRef} onSubmit={handleCreateSection}>
        <h3> Cadastre uma seção!</h3>
        <section>
          <Input
            type="text"
            placeholder="Seção"
            label="Seção"
            id="sectionName"
            name="sectionName"
          />

          <Button type="submit" loading={loading}>
            Cadastrar
          </Button>
        </section>
      </Form>
    </ModalContainer>
  );
};

export default ModalItem;
