import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../contexts/Auth/AuthContext';
import { Container, Logo, Perfil } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Logo>
        <FaUtensils size={56} color="#f6f7fa" />
        <h1>Cardápio Online</h1>
      </Logo>
      <Perfil>
        <span>Olá, restaurando do clebim</span>
        <a href="https://google.comx">Ver perfil</a>
        <button type="button" onClick={signOut}>
          Logout
          <FiLogOut color="#e13e14" size={16} />
        </button>
      </Perfil>
    </Container>
  );
};

export default Header;
