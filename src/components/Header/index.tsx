import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Container, Logo, Perfil } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <FaUtensils size={56} color="#f6f7fa" />
        <h1>Menu Online</h1>
      </Logo>
      <Perfil>
        <span>Olá, restaurando do clebim</span>
        <a href="https://google.comx">Ver perfil</a>
        <button type="button">
          Logout
          <FiLogOut color="#e13e14" size={16} />
        </button>
      </Perfil>
    </Container>
  );
};

export default Header;
