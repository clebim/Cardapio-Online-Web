import { shade } from 'polished';
import styled from 'styled-components';

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin: 4px 8px;
  }
`;

export const ButtonBack = styled.button`
  background: #e13e14;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #f4ede8;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${shade(0.2, '#e13e14')};
  }
`;
