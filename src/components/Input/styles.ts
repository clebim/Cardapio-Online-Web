import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  span {
    color: #c53030;
    font-weight: 500;
    display: block;
    margin: 2px 0 0 8px;
    font-size: 12px;
  }

  & + div {
    margin-top: 8px;
  }
`;

export const Content = styled.div<ContainerProps>`
  background: #292e3c;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #292e3c;
  color: #ffffff;
  display: flex;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #7c40ff;
      border-color: #7c40ff;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #7c40ff;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #ffffff;
    &::placeholder {
      color: #ffffff;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #ffffff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
