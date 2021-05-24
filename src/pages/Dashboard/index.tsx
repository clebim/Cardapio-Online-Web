import React from 'react';
import { Link } from 'react-scroll';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
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

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <HeaderContainer>
          <ListSections>
            <Link
              spy
              smooth
              duration={500}
              offset={-200}
              to="section_1"
              activeClass="active"
            >
              section1
            </Link>
            <Link
              spy
              smooth
              duration={500}
              offset={-200}
              to="section_2"
              activeClass="active"
            >
              section2
            </Link>
            <Link
              spy
              smooth
              duration={500}
              offset={-200}
              to="section_3"
              activeClass="active"
            >
              section3
            </Link>
            <Link
              spy
              smooth
              duration={500}
              offset={-200}
              to="section_4"
              activeClass="active"
            >
              section4
            </Link>
          </ListSections>
          <ButtonContainer>
            <button type="button">Adicionar seção</button>
          </ButtonContainer>
        </HeaderContainer>
        <Content>
          <Section id="section_1">
            <TitleContainer>
              <h2>Refrigerante</h2>
              <button type="button">Adicionar item</button>
            </TitleContainer>
            <ItemContainer>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>
                    Pão brioche, burger black angus 100g, cheddar, c roxa e
                    molho punch
                  </p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>
                    Pão brioche, burger black angus 100g, cheddar, c roxa e
                    molho punch
                  </p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>
                    Pão brioche, burger black angus 100g, cheddar, com bastante
                    blabbla punch
                  </p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
            </ItemContainer>
          </Section>
          <Section id="section_2">
            <TitleContainer>
              <h2>Hamburgues</h2>
              <button type="button">Adicionar item</button>
            </TitleContainer>
            <ItemContainer>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>
                    Pão brioche, burger black angus 100g, cheddar, c roxa e
                    molho punch
                  </p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>Pão brioche, burger black angus 100g,</p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>
                    Pão brioche, burger black angus 100g, cheddar, com bastante
                    blabbla punch
                  </p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
            </ItemContainer>
          </Section>
          <Section id="section_3">
            <TitleContainer>
              <h2>Refrigerante</h2>
              <button type="button">Adicionar item</button>
            </TitleContainer>
            <ItemContainer>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>
                    Pão brioche, burger black angus 100g, cheddar, c roxa e
                    molho punch
                  </p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>
                    Pão brioche, burger black angus 100g, cheddar, c roxa e
                    molho punch
                  </p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>
                    Pão brioche, burger black angus 100g, cheddar, com bastante
                    blabbla punch
                  </p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
            </ItemContainer>
          </Section>
          <Section id="section_4">
            <TitleContainer>
              <h2>Refrigerante</h2>
              <button type="button">Adicionar item</button>
            </TitleContainer>
            <ItemContainer>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>
                    Pão brioche, burger black angus 100g, cheddar, c roxa e
                    molho punch
                  </p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>
                    Pão brioche, burger black angus 100g, cheddar, c roxa e
                    molho punch
                  </p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
              <Item>
                <Details>
                  <h3>CHEESEBURGER</h3>
                  <p>
                    Pão brioche, burger black angus 100g, cheddar, com bastante
                    blabbla punch
                  </p>
                  <span>R$ 29,90</span>
                </Details>
                <ImageContainer>
                  <img
                    src="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
                    alt="teste"
                  />
                </ImageContainer>
              </Item>
            </ItemContainer>
          </Section>
        </Content>
      </Container>
      <Footer>
        <Social>
          <div>
            <h3>Cardápio online</h3>
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
              © Copyright {new Date().getFullYear()} - Cardápio online - Todos
              os direitos reservados com Agência de Restaurantes Online S.A.
            </p>
          </div>
          <div>
            <span>Termos e condiçoes de uso</span>
            <span>Privacidade</span>
            <span>Dicas de segurança</span>
          </div>
        </Copyright>
      </Footer>
    </>
  );
};

export default Dashboard;
