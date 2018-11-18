import styled from 'styled-components';

export const ItemCard = styled.div`
  height: 200px;
  width: ${(props) => (props.width ? `${props.width}px` : '293px')};
  background: #f3f3f3;
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 4px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.25s;
  box-sizing: border-box;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 100%);
  &:hover {
    opacity: 1;
  }
`;
