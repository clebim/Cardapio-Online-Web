import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface MenuSection {
  isActive?: boolean;
}

export const Container = styled.div`
  margin: 1rem 4rem;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #1e2026;
  border-bottom: 1px solid white;
  position: sticky;
  z-index: 3;
  top: 0;
  padding: 1rem 0;
`;
export const ButtonContainer = styled.div`
  margin-left: 8px;
  button {
    padding: 0.5rem 0.75rem;
    width: 148px;
    border: 0;
    color: #ffffff;
    border-radius: 8px;
    font-size: 16px;
    background-color: #7c40ff;
    cursor: pointer;
    &:hover {
      background-color: ${shade(0.2, '#7c40ff')};
    }
  }
`;

export const ListSections = styled.div`
  width: 100%;
  overflow-x: scroll;
  padding: 4px;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 4px solid white;
  }

  a {
    text-decoration: none;
    color: #c4c2c5;
    z-index: 3;
    cursor: pointer;

    &:first-child {
      margin-right: 1rem;
    }

    & + a {
      margin: 0 1rem;
    }
  }
`;

export const Content = styled.div`
  margin-top: 2rem;
  position: relative;
  overflow-x: auto;
  z-index: 0;
`;

export const Section = styled.section`
  width: 100%;
  border-bottom: 1px solid white;
  padding-bottom: 2rem;

  & + section {
    margin-top: 2.5rem;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 0.5rem 0.75rem;
    border: 0;
    color: #ffffff;
    border-radius: 8px;
    font-size: 16px;
    background-color: #7c40ff;
    cursor: pointer;
    &:hover {
      background-color: ${shade(0.2, '#7c40ff')};
    }
  }
`;

export const ItemContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

export const Item = styled.div`
  background-color: #292e3c;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;
    max-width: 95%;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4rem;
  }

  span {
    background-color: #7c40ff;
    border-radius: 4px;
    padding: 0.5rem;
    width: 5rem;
    margin-top: 3rem;
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 0.5rem;
  img {
    width: 9rem;
    height: 9rem;
    border-radius: 8px;
  }
`;

export const Footer = styled.footer`
  margin: 2rem 4rem;
  padding-top: 2rem;
`;

export const Social = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  div {
    & + div {
      span {
        display: flex;
        align-items: center;
        font-weight: normal;
        svg {
          margin-right: 1rem;
        }
      }
    }
  }

  span {
    display: block;
    padding: 1rem;
  }
  h3 {
    padding: 1rem;
  }
`;

export const Copyright = styled.footer`
  margin-top: 2rem;
  padding-top: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  div {
    display: flex;
    align-items: center;

    span {
      margin: 0 1rem;
    }

    &:first-child {
      p {
        margin: 0 1rem;
      }
    }
  }
`;
