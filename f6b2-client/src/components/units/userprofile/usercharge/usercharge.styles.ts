import styled from '@emotion/styled';
import { BsThreeDots } from 'react-icons/bs';

interface IUserChargeStyle {
  status: string;
}

export const WrapperColStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px 26px;
`;

export const ImageDefault = styled.img`
  width: 100%;
  height: 100%;
`;

export const H2Title = styled.h2`
  width: 100%;
  height: auto;
  font-size: 20px;
  font-style: bold;
  text-align: Center;
`;

export const DividerTitle = styled.div`
  width: 100%;
  border-bottom: 3px dashed black;
  margin: 15px 0px;
`;

export const WrapperRow56 = styled.div`
  width: 56%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Ptext = styled.p`
  width: auto;
  font-size: 10px;
`;

export const DividerPoint = styled.div`
  width: 100%;
  border-bottom: 2px dashed #6b6b6b;
  margin: 15px 0px;
`;

export const WrapperRow53 = styled.div`
  width: 61%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const WrapperRow61 = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
`;

export const H3Title = styled.h3`
  width: 100%;
  height: auto;
  font-size: 15px;
  font-style: bold;
  text-align: Center;
`;

export const PDate = styled.p`
  width: 120px;
  font-size: 9px;
  text-align: center;
  margin: 0px;
`;

export const PPoint = styled.p`
  width: 170px;
  font-size: 12px;
  text-align: right;
  padding-right: 10px;
  color: ${(props: IUserChargeStyle) =>
    props.status === 'CANCELLED' ? 'red' : 'black'};
  margin: 0px;
`;

export const PPrice = styled.p`
  width: 170px;
  font-size: 12px;
  text-align: right;
  padding-right: 10px;
  color: ${(props: IUserChargeStyle) =>
    props.status === 'CANCELLED' ? 'red' : 'black'};
  margin: 0px;
`;

export const Connector = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px dashed #a8a8a8;
`;

export const PTextCharge = styled.p`
  width: auto;
  font-size: 9px;
  text-align: center;
  margin: 0px;
`;

export const IconDot = styled(BsThreeDots)`
  font-size: 35px;
  :hover {
    cursor: pointer;
  }
`;
