import styled, { css } from 'styled-components';

interface MenuSection {
  isActive?: boolean;
}

export const Container = styled.div`
  position: absolute;
  background-color: blue;
`;

export const ListSections = styled.div`
  width: 100vw;
  overflow-x: scroll;
  position: sticky;
  z-index: 7;
  top: 6rem;
  padding: 1rem;
  background-color: #1e2026;
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 4px solid white;
  }
`;

export const ItemSection = styled.a<MenuSection>`
  margin: 0 1rem;
  text-decoration: none;
  color: #c4c2c5;
  z-index: 7;

  ${(props) =>
    props.isActive &&
    css`
      border-bottom: 4px solid red;
      border-color: #7c40ff;
      border-radius: 2px;
      color: #ffffff;
      font-weight: bold;
    `}
`;

export const Content = styled.div`
  position: relative;
  overflow-x: auto;
  z-index: 0;
`;
