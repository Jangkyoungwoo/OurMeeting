import styled from 'styled-components';

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  width: 500px;
  @media screen and (min-width: 1300px) {
    width: 600px;
  }
  @media screen and (max-width: 800px) {
    width: 400px;
  }
`;
export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 40px;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & p {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 18px;
    color: #666666;
    position: absolute;
    bottom: -15px;
  }
`;
export const LoginMain = styled.div`
  width: 90%;
  position: relative;
  margin-bottom: 60px;

  & input {
    background: transparent;
    border: none;
    border-bottom: solid 1px rgba(0, 0, 0, 0.15);
    padding: 20px 0px 5px 0px;
    font-size: 10pt;
    width: 100%;
    padding-bottom: 20px;
  }
  & input::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  & input:focus {
    outline: none;
    border: none;
    border-bottom: 1.5px solid #0594ff;
  }

  & span {
    position: absolute;
    right: 0px;
    bottom: -30px;
    color: #0594ff;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 30px;
  }
`;
export const LoginFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & div {
    color: rgba(0, 0, 0, 0.3);
    font-size: 13px;
  }
  & input {
    background-color: #0594ff;
    width: 90%;
    padding: 15px 0px;
    border-radius: 10px;
    color: white;
    border: none;
  }
`;
