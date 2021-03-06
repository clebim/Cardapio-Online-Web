/* eslint-disable camelcase */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaUtensils } from 'react-icons/fa';
import Header from '../../components/Header';
import './styles.css';

import {
  ListSections,
  Content,
  Section,
  ButtonContainer,
  HeaderContainer,
  ItemContainer,
  TitleContainer,
  Item,
  Details,
  ImageContainer,
  Container,
  Footer,
  Social,
  Copyright,
} from './styles';
import api from '../../services/api';
import { useToast } from '../../contexts/Toast';
import Modal from '../../components/Modal';
import ModalSection from './components/ModalSection';

interface ItemMenu {
  id: number;
  menu_section_id: number;
  item_name: string;
  price: string;
  description: string;
  observation: string | null;
  sold_off: boolean;
  photo: {
    id: number;
    real_name: string;
    path: string;
    menu_item_id: number;
  };
}

interface SectionMenu {
  id: number;
  user_id: number;
  section_name: string;
  is_active: string;
  items: ItemMenu[];
}

interface ListItemsClient {
  success: boolean;
  message: string;
  items: SectionMenu[];
}

const Dashboard: React.FC = () => {
  const { addToast } = useToast();
  const [list, setList] = useState<SectionMenu[]>([] as SectionMenu[]);
  const [open, setOpen] = useState<boolean>(false);

  function openModal(): void {
    setOpen(!open);
  }

  const getItems = useCallback(async () => {
    try {
      const response = await api.get<ListItemsClient>('/items/index');

      setList(response.data.items);
    } catch (error) {
      addToast({
        title: 'Erro na busca',
        description: 'Erro ao buscar a lista no servidor',
        type: 'error',
      });
    }
  }, [addToast]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <>
      <Header />
      <Container>
        <Modal showModal={open} setShowModal={setOpen} width={800} height={160}>
          <ModalSection setOpen={setOpen} getItemsDashboard={getItems} />
        </Modal>

        <HeaderContainer>
          <ListSections>
            {list.map((data) => (
              <Link
                key={data.id}
                spy
                smooth
                duration={500}
                offset={-250}
                to={data.id.toString()}
                activeClass="active"
              >
                {data.section_name}
              </Link>
            ))}
          </ListSections>
          <ButtonContainer>
            <button onClick={openModal} type="button">
              Adicionar se????o
            </button>
          </ButtonContainer>
        </HeaderContainer>
        <Content>
          {list.map((data) => (
            <Section id={data.id.toString()} key={data.id}>
              <TitleContainer>
                <h2>{data.section_name}</h2>
                <button type="button">Adicionar item</button>
              </TitleContainer>
              <ItemContainer>
                {data.items.map((item) => (
                  <Item key={item.id}>
                    <Details>
                      <h3>{item.item_name}</h3>
                      <p>{item.description}</p>
                      <span>R$ {item.price}</span>
                    </Details>
                    <ImageContainer>
                      <img src={item.photo.path} alt={item.photo.real_name} />
                    </ImageContainer>
                  </Item>
                ))}
              </ItemContainer>
            </Section>
          ))}
        </Content>
      </Container>
      <Footer>
        <Social>
          <div>
            <h3>Card??pio online</h3>
            <span>Site institucional</span>
            <span>Fale conosco</span>
            <span>Cardapio online Brasil</span>
          </div>
          <div>
            <h3>Social</h3>
            <div>
              <span>
                <FiFacebook color="#FFFFFF" size={16} />
                Facebook
              </span>
              <span>
                <FiInstagram color="#FFFFFF" size={16} />
                Instagram
              </span>
              <span>
                <FiTwitter color="#FFFFFF" size={16} />
                Twitter
              </span>
            </div>
          </div>
        </Social>
        <Copyright>
          <div>
            <FaUtensils size={56} color="#f6f7fa" />
            <p>
              ?? Copyright {new Date().getFullYear()} - Card??pio online - Todos
              os direitos reservados com Ag??ncia de Restaurantes Online S.A.
            </p>
          </div>
          <div>
            <span>Termos e condi??oes de uso</span>
            <span>Privacidade</span>
            <span>Dicas de seguran??a</span>
          </div>
        </Copyright>
      </Footer>
    </>
  );
};

export default Dashboard;
