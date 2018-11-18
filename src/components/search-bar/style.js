import styled from 'styled-components';

const fontFamily = "'Open Sans', sans-serif";

export const SerachBarConatiner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  min-height: ${(props) => (props.resize ? '50px' : '100%')};
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: ${fontFamily};
  background: #fff;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 5px 0 rgba(0, 0, 0, 0.06), 0 1px 10px 0 rgba(0, 0, 0, 0.08);
  transition: all linear 0.5s;
  z-index: 999;
  flex-basis: 20%;
  div {
    width: 400px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-family: ${fontFamily};
  color: rgba(0, 0, 0, 0.65);
  display: flex;
  flex-basis: 80%;
  background-color: #fff;
  padding: 6px 11px;
  height: 40px;
  font-size: 16px;
  box-sizing: border-box;
  transition: all 0.3s;
  border: 1px solid #d9d9d9;
  border-radius: 4px 0 0 4px;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
`;
export const Button = styled.button`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: #fff;
  background-color: ${(props) => (props.disabled ? '#40a9ff' : '#1890ff')};
  border-color: ${(props) => (props.disabled ? '#40a9ff' : '#1890ff')};
  font-family: ${fontFamily};
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  padding: 0 15px;
  font-size: 16px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 0 4px 4px 0;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  border-color: #d9d9d9;
  outline: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 20%;
  span {
    margin-right: 10px;
  }
  &:hover {
    color: #fff;
    background-color: ${(props) => (props.disabled ? null : '#1890ff')};
    border-color: ${(props) => (props.disabled ? null : '#1890ff')};
  }
`;
