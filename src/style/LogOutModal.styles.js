import styled from 'styled-components';

export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Div = styled.div`
  width: 90px;
  height: 40px;
  position: absolute;
  right: 50px;
  top: 90px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);

  &:hover {
    cursor: pointer;
  }
`;
export const DivSpan = styled.span`
  padding: 5px;
  font-size: 13px;
`;
