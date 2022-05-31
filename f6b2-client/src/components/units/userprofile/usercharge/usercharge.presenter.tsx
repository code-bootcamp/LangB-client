import * as Charge from './usercharge.styles';
import Barcode from 'react-barcode';
import UserChargeItem from './userchargeitem.presenter';

interface IUserProfileChargelistPresenter {
  receipts: any;
  totalPoint: number;
}

export default function UserChargeUI(props: IUserProfileChargelistPresenter) {
  const options = {
    width: 2,
    height: 40,
    format: 'CODE128',
    displayValue: true,
    fontOptions: '',
    font: 'monospace',
    textAlign: 'center',
    textPosition: 'bottom',
    textMargin: 2,
    fontSize: 8,
    background: '#ffffff',
    lineColor: '#000000',
    margin: 10,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: undefined,
    marginRight: undefined,
  };

  return (
    <>
      <Charge.WrapperColStart>
        <Charge.H2Title>RECEIPT #174375</Charge.H2Title>
        <Charge.DividerTitle></Charge.DividerTitle>
        <Charge.WrapperRow56>
          <Charge.Ptext>LangB</Charge.Ptext>
          <Charge.Ptext>12:34</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.WrapperRow56>
          <Charge.Ptext>LangB Address : https://langbee.com</Charge.Ptext>
          <Charge.Ptext>Date : 2022-05-19</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.WrapperRow56>
          <Charge.Ptext>Manager : BaByOnTop</Charge.Ptext>
          <Charge.Ptext>Terminal #1</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.DividerPoint></Charge.DividerPoint>
        <Charge.WrapperRow53>
          <Charge.H3Title>Point</Charge.H3Title>
          <Charge.H3Title>Price</Charge.H3Title>
        </Charge.WrapperRow53>
        {props.receipts.fetchReceipts.map((el: any) => (
          <UserChargeItem el={el} />
        ))}

        <Charge.DividerPoint></Charge.DividerPoint>
        <Charge.WrapperRow56>
          <Charge.Ptext>CARD #</Charge.Ptext>
          <Charge.Ptext>XXXX XXXX XXXX XXXX</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.WrapperRow56>
          <Charge.Ptext>AUTH</Charge.Ptext>
          <Charge.Ptext>#213331</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.WrapperRow56>
          <Charge.Ptext>TOTAL CHARGED POINTS</Charge.Ptext>
          <Charge.Ptext>{props.totalPoint}P</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.WrapperRow56>
          <Charge.Ptext>TOTAL PRICE</Charge.Ptext>
          <Charge.Ptext>{props.totalPoint * 10}W</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.DividerPoint></Charge.DividerPoint>
        <Charge.PTextCharge>THANK YOUR FOR YOUR PAYMENT!</Charge.PTextCharge>
        <Barcode value={'Langb'} {...options} />
      </Charge.WrapperColStart>
    </>
  );
}
