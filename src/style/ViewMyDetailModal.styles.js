import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Div = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  padding: 25px;
  padding-top: 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
`;
export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;
export const HeaderDivName = styled.div`
  background-color: #cef2f9;
  color: #17c2e0;
  padding: 7px 14px 7px 14px;
  border-radius: 7px;
  font-weight: 700;
`;
export const BodyStartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 35px;

  & div:first-child {
    font-weight: 700;
    font-size: 28px;
    line-height: 60px;
  }
`;
export const BodyDataDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 110px;
  margin-bottom: 25px;
`;

export const DeleteIcon = styled(ClearIcon)`
  &:hover {
    cursor: pointer;
  }
`;

export const BodyDataInfo = styled.div`
  margin: auto;
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BodyDataInfoDiv = styled.div`
  background-color: #f9fdff;
  border-radius: 6px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 45%;
  height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const MeetingContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  & form {
    width: 100%;
  }
`;

export const MeetingContentUl = styled.ul`
  color: #c2c2c2;
  padding-left: 0px;

  & div {
    text-align: left;
    margin-bottom: 10px;
    height: 100px;
    width: 100%;
    overflow: scroll;
  }
  & div::-webkit-scrollbar {
    display: none;
  }
`;
export const UpdateBtn = styled.button`
  border-radius: 10%;
  border: none;
  padding: 5px 10px;
`;
export const HeaderRightDiv = styled.div`
  display: flex;
`;
export const ColorDiv = styled.div`
  color: #888888;
`;
export const DateInput = styled.input`
  &::before {
    content: attr(data-placeholder);
    width: 100%;
  }

  &:focus::before {
    display: none;
  }
  &:valid::before {
    display: none;
  }
`;
