import React, { useRef, useEffect, useCallback, HTMLAttributes } from 'react';
import { useSpring, animated } from 'react-spring';

import { Background, CloseModalButton, ModalWrapper } from './styles';

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  width?: number;
  height?: number;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  width = 250,
  height = 250,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(-25%)` : `translateY(-100%)`,
  });

  const closeModal = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <Background onClick={closeModal} ref={modalRef}>
      <animated.div style={animation}>
        <ModalWrapper width={width} height={height} showModal={showModal}>
          {children}
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => setShowModal((prev: boolean) => !prev)}
          />
        </ModalWrapper>
      </animated.div>
    </Background>
  );
};

export default Modal;
