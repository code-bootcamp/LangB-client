import styled from '@emotion/styled';

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 69px;
`;

export const SignUpWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: auto;
  padding: 50px 46px 61px 44px;
  background-color: #fff;
  box-shadow: 30px 30px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px 0px;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const SignUpTitleH1 = styled.h1`
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
`;

export const SignUpItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const SignUpItemInput = styled.input`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 41px;
  border: none;
  border-bottom: 2px solid #dbdbdb;
  font-size: 16px;
  padding: 13px 0px 10px 0px;
  color: #767676;
`;

export const SignUpItemBtn = styled.button`
  width: 100%;
  height: 41px;
  margin-top: 24px;
  border: none;
  font-size: 12px;
  padding: 12px 16px;
  color: #f8f9fa;
  background: #ffb950;
  border-radius: 10px;
  cursor: pointer;
  :disabled {
    background-color: gray;
  }
`;

export const Warning = styled.p`
  color: #ed1c24;
  font-weight: 400;
  font-size: 8px;
  line-height: 11px;
  margin-top: 3px;
`;

export const BtnMoveSignUp = styled.button`
  width: 100%;
  height: auto;
  border: none;
  padding: 0px 16px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #767676;
  background-color: white;
  margin-bottom: 30px;
  :hover {
    cursor: pointer;
  }
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;

export const WrapperRadio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LabelRadio = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
`;

export const PFindId = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  text-align: right;
  color: #767676;
`;

export const ButtonGoogle = styled.a`
  width: 298px;
  height: 29px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  background: #ffffff;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const WarperBtnContents = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImageBtnIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

export const PBtnText = styled.p`
  width: auto;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #000000;
  margin: 0px;
`;

export const ButtonKakao = styled.a`
  width: 298px;
  height: 29px;
  border: none;
  border-radius: 10px;
  background: #fee500;
  border: none;
  margin-bottom: 16px;
  text-decoration: none;
`;

export const ButtonNaver = styled.a`
  width: 298px;
  height: 29px;
  border: none;
  border-radius: 10px;
  background: #06bd34;
  border: none;
  text-decoration: none;
`;
