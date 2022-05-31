import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Image } from 'antd';
import 'antd/dist/antd.css';

const SliderChild = styled.div`
  width: 430px;
  height: 500px;
`;

const SliderGarden = styled(Slider)`
  width: 430px;
  height: 500px;
  .slick-dots {
    .slick-active {
      button::before {
        color: #ff0000;
      }
    }
    button::before {
      color: #ffffff;
    }
  }
`;

const Image1 = styled(Image)`
  object-fit: cover;
`;

const Video = styled.video`
  width: 430px;
  height: 500px;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 430px;
  height: 500px;
`;

export default function GardenDetailImgUI(props: any) {
  const settings: any = {
    dots: false,
    prevArrow: false,
    nextArrow: false,

    lazyLoad: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      {props.video !== '' || props.data?.fetchBoardImage.length > 0 ? (
        <SliderGarden {...settings}>
          {props.video !== '' ? (
            <SliderChild>
              <Video src={props.video} controls />
            </SliderChild>
          ) : (
            ''
          )}
          {props.data?.fetchBoardImage.map((el: any, index: any) => (
            <div key={index}>
              {props.data?.fetchBoardImage.length > 0 && (
                <SliderChild>
                  <Image1 width={430} height={500} src={el.image} />
                </SliderChild>
              )}
            </div>
          ))}
        </SliderGarden>
      ) : (
        <Image1 width={430} height={500} src='/image/default3.jpg' />
      )}
    </Wrapper>
  );
}
