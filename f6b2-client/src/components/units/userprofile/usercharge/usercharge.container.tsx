import UserChargeUI from './usercharge.presenter';

interface IUserProfileChargelist {
  receipts: any;
}

export default function UserChargeContainer(props: IUserProfileChargelist) {
  let totalPoint = 0;

  props?.receipts?.fetchReceipts.forEach(
    (el: { status: string; point: number }) => {
      if (el.status === 'PURCHASED') totalPoint = totalPoint + el.point;
      else totalPoint = totalPoint - el.point;
    }
  );

  return <UserChargeUI receipts={props.receipts} totalPoint={totalPoint} />;
}
