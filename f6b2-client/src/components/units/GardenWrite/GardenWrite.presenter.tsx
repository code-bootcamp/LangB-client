// import WebcamRecord from '../../commons/records';
import * as L from './GardenWrite.style';
import { IGardenWrite } from './GardenWrite.type';
import { FaRegUserCircle } from 'react-icons/fa';
import ImageUpload from '../../commons/upload';
import { v4 as uuidv4 } from 'uuid';
import VideoUpload from '../../commons/videoupload';
import { Box, Modal } from '@mui/material';
import VideoRecord from './videorecord/videorecord.container';
import Badge from '@mui/material/Badge';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

export default function GardenWriteUI(props: IGardenWrite) {
  const bee1Container = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      // @ts-ignore
      container: bee1Container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../../public/lottie/bee1.json'),
    });
  }, []);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: '#3A3939;',
    boxShadow: 24,
    p: 2,
    borderRadius: '25px',
  };

  return (
    <L.WrapperDiv>
      {props.isToken ? (
        <>
          <L.WrapperRow>
            <L.WrapperImgProfile>
              {props.data?.fetchUser?.image.includes('http') ? (
                <L.ImgProfile src={props.data?.fetchUser?.image} />
              ) : (
                <FaRegUserCircle />
              )}
            </L.WrapperImgProfile>
            <L.H2ProfileName>{props.data?.fetchUser?.name}</L.H2ProfileName>
          </L.WrapperRow>
          <L.WrapperRow>
            <L.TextareaContents
              onChange={props.onChangeContents}
              placeholder='Enter Your Words Here'
              value={props.isContent || ''}
            ></L.TextareaContents>
          </L.WrapperRow>
          <L.WrapperRowIcon>
            <L.GardenRecordUpload onClick={props.handleOpen} />

            <Modal
              open={props.open}
              onClose={props.handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={style}>
                <VideoRecord
                  onChangeVideoUrls={props.onChangeVideoUrls}
                  handleClose={props.handleClose}
                />
              </Box>
            </Modal>

            <ImageUpload
              onChangeFileUrls={props.onChangeFileUrls}
              fileUrls={props.fileUrls}
              type={'garden'}
            />

            <VideoUpload
              onChangeVideoUrls={props.onChangeVideoUrls}
              // @ts-ignore
              videoUrls={props.videoUrls}
              type={'garden'}
            />
          </L.WrapperRowIcon>
          <L.WrapperItem>
            <L.VideoItempWrap>
              {props.videoUrls ? (
                <Badge
                  badgeContent={'X'}
                  color='primary'
                  onClick={props.onClickVideoDelete}
                >
                  <L.VideoThumbnail
                    controls
                    key={uuidv4()}
                    src={props.videoUrls}
                  />
                </Badge>
              ) : (
                ''
              )}
            </L.VideoItempWrap>
            {props.fileUrls?.map((el, index) => (
              <>
                <L.ImageItempWrap>
                  <Badge
                    badgeContent={'X'}
                    color='secondary'
                    onClick={props.onClickImageDelete(index)}
                  >
                    <L.ImageThumbnail
                      key={uuidv4()}
                      src={
                        el.startsWith('https', 0)
                          ? el
                          : `https://storage.googleapis.com/${el}`
                      }
                    />
                  </Badge>
                </L.ImageItempWrap>
              </>
            ))}
          </L.WrapperItem>

          <L.ButtonSave onClick={props.onClickSave} isContent={props.isContent}>
            Upload
          </L.ButtonSave>
        </>
      ) : (
        <>
          <div
            // @ts-ignore
            ref={bee1Container}
          ></div>
          <L.MoveToLogin onClick={props.onClickLogin}>Log In</L.MoveToLogin>
        </>
      )}
    </L.WrapperDiv>
  );
}
