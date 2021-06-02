import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { boolean } from 'yup/lib/locale';

interface IsActive {
  showModal: boolean;
}

export const Background = styled.div<IsActive>`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(props) => (props.showModal ? 3 : 0)};
`;

interface Wrapper {
  showModal: boolean;
  height: number;
  width: number;
}

export const ModalWrapper = styled.div<Wrapper>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  z-index: 10;
  position: relative;
  border-radius: 12px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
