import styled from 'styled-components';

export const ModalContent = styled.div``;
export const ModalBody = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  .tag {
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px;
  }
`;
export const ImageContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
`;
export const SocialCell = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
`;
