import { getDate } from '../../../../commons/libraries/utils';
import * as Charge from './usercharge.styles';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import React from 'react';
import CancleModalBox from './userchargemodalbox.presenter';

interface IUserChargeItem {
  el: any;
}

export default function UserChargeItem(props: IUserChargeItem) {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    height: '25%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '25px',
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClickDot = () => {
    handleOpen();
  };

  return (
    <>
      <Charge.WrapperRow61>
        <Charge.PDate>{getDate(props?.el?.purchasedAt)}</Charge.PDate>
        <Charge.PPoint status={props?.el?.status}>
          {props?.el?.status === 'CANCELLED'
            ? (props?.el?.point * -1).toLocaleString('ko-KR')
            : props?.el?.point.toLocaleString('ko-KR')}
          P
        </Charge.PPoint>
        <Charge.Connector></Charge.Connector>
        <Charge.PPrice status={props?.el?.status}>
          {props?.el?.status === 'CANCELLED'
            ? (props?.el?.price * -1).toLocaleString('ko-KR')
            : (props?.el?.price).toLocaleString('ko-KR')}
          W
        </Charge.PPrice>
        {props.el.status === 'CANCELLED' ? (
          <Charge.IconDot size={'35'} color={'white'} />
        ) : (
          <>
            <Charge.IconDot size={'35'} onClick={onClickDot} />
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <CancleModalBox
                  impUid={props?.el?.impUid}
                  price={props?.el?.price}
                  handleClose={handleClose}
                />
              </Box>
            </Modal>
          </>
        )}
      </Charge.WrapperRow61>
    </>
  );
}
