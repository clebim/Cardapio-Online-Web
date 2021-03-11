import { animation, shade } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import backgroundImage from '../../assets/logo.jpg';

interface PropsSpan {
  isActive?: boolean;
}

interface AnimatedContainerInterface {
  from: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Step = styled.div`
  width: 300px;

  display: flex;
  justify-content: space-between;
`;

export const NumberStep = styled.span<PropsSpan>`
  display: flex;
  place-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  font-size: 24px;
  border-radius: 50%;
  background-color: rgba(40, 46, 60, 0.6);
  transition: background-color 1s;

  ${(props) =>
    props.isActive &&
    css`
      background-color: rgba(124, 64, 255, 0.6);
    `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 800px;

  form {
    h1 {
      margin-bottom: 20px;
    }

    margin: 20px 0;
    width: 460px;
    text-align: center;

    a {
      color: #ffffff;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#ffffff')};
      }
    }
  }

  > a {
    color: #7c40ff;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#7c40ff')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(+200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedContainer = styled.div<AnimatedContainerInterface>`
  animation: ${appearFromLeft} 1s;

  ${(props) =>
    props.from &&
    css`
      animation: ${appearFromRight} 1s;
    `}
`;
