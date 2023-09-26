import styled from 'styled-components';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const EntireDiv = styled.div`
  width: 390px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 25px 20px 17px;
`;
export const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
export const Close = styled(CloseRoundedIcon)``;
export const Form = styled.form`
  margin-left: 17px;
  margin-right: 27px;
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #d7e3f1;
  width: 291px;
  height: 60px;
  outline: 0;
  font-size: 18px;
  font-weight: 500;
  &:focus {
    border-bottom: 2px solid #0594ff;
  }
`;
export const Select = styled.select`
  border: 0;
  border-bottom: 1px solid #d7e3f1;
  width: 291px;
  height: 60px;
  outline: 0;
  font-size: 18px;
  font-weight: 500;
  &:focus {
    border-bottom: 2px solid #0594ff;
  }
`;

export const TimeSelect = styled.select`
  border: 0;
  border-bottom: 1px solid #d7e3f1;
  height: 60px;
  width: 128.35px;
  font-size: 18px;
  font-weight: 500;
  outline: 0;
  &:focus {
    border-bottom: 2px solid #0594ff;
  }
`;
export const TimeInput = styled.input`
  border: 0;
  border-bottom: 1px solid #d7e3f1;
  width: 291px;
  height: 60px;
  outline: 0;
  font-size: 18px;
  font-weight: 500;
  &:focus {
    border-bottom: 2px solid #0594ff;
  }
`;
export const TextArea = styled.textarea`
  margin-top: 25px;
  width: 377px;
  height: 86px;
  border: 1px solid #d7e3f1;
  border-radius: 6px;
  resize: none;
  font-weight: 500;
  font-size: 14px;
  padding: 15px;
  outline: 0;
  ::placeholder {
    color: #d7e3f1;
  }
  &:focus {
    border: 2px solid #0594ff;
  }
`;

export const Btn = styled.input`
  width: 378px;
  height: 60px;
  background: #0594ff;
  border-radius: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  border: none;
  margin-top: 30px;
`;
export const TextDiv = styled.div`
  color: #888888;
  margin-top: 13px;
  font-size: 14px;
  font-weight: 500;
`;
export const TextSpan = styled.span`
  color: #888888;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 500;
`;
export const TextLabel = styled.label`
  color: #888888;
  margin-top: 21px;
  margin-bottom: 21px;
  font-size: 14px;
  font-weight: 500;
`;
