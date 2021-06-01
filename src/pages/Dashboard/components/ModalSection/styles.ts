import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: #f6f7fa;
  padding: 2rem;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 100%;
    }

    button {
      width: 100px;
      margin-bottom: 12px;
      margin-left: 2rem;
    }
  }
`;
