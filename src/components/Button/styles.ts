import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isLoading: number;
}

export const Container = styled.button<ContainerProps>`
  background: #7c40ff;
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
  &:hover {
    background: ${shade(0.2, '#7c40ff')};
  }
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
`;
