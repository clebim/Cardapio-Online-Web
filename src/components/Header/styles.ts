import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  z-index: 10; /* Set the navbar to fixed position */
  top: 0;
  width: 100vw;
  height: 6rem;
  background-color: #7c40ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 1rem;

  h1 {
    margin-left: 1rem;
  }
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 1rem;

  span {
    font-size: 1.2rem;
    margin-right: 1.5rem;
  }

  a {
    text-decoration: none;
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    background-color: #fff;
    color: #000;
    border-radius: 8px;
    font-size: 14px;

    &:hover {
      filter: brightness(0.9);
    }
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #fff;
    color: #000;
    border-radius: 8px;
    font-size: 14px;
    border: none;
    display: flex;
    align-items: center;

    svg {
      margin-left: 0.5rem;
    }
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
