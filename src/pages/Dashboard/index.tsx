import React from 'react';
import Header from '../../components/Header';

import { Container, ListSections, ItemSection, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <ListSections>
        <ItemSection isActive href="http://google.com">
          Refrigerante
        </ItemSection>
        <ItemSection href="http://google.com">Refrigerante</ItemSection>
        <ItemSection href="http://google.com">Refrigerante</ItemSection>
        <ItemSection href="http://google.com">Refrigerante</ItemSection>
        <ItemSection href="http://google.com">Refrigerante</ItemSection>
        <ItemSection href="http://google.com">Refrigerante</ItemSection>
        <ItemSection href="http://google.com">Refrigerante</ItemSection>
        <ItemSection href="http://google.com">Refrigerante</ItemSection>
        <ItemSection href="http://google.com">Refrigerante</ItemSection>
        <ItemSection href="http://google.com">Refrigerante</ItemSection>
        <ItemSection href="http://google.com">Refrigerante</ItemSection>
      </ListSections>
      <Content>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
      </Content>
    </>
  );
};

export default Dashboard;
