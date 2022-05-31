import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image } from "antd";
import "antd/dist/antd.css";

const SliderChild = styled.div`
  width: 450px;
  height: 284px;
`;

const SliderGarden = styled(Slider)`
  width: 450px;
  height: 284px;
  margin-top: 25px;
  margin-bottom: 10px;

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 40px;
    color: black;
  }

  .slick-prev:before {
    content: "<";
  }
  [dir="rtl"] .slick-prev:before {
    content: ">";
  }

  .slick-next:before {
    content: ">";
  }
  [dir="rtl"] .slick-next:before {
    content: "<";
  }

  .slick-prev {
    left: -20px;
    z-index: 10;
  }
  .slick-next {
    right: -20px;
    z-index: 10;
  }
  .slick-prev:before {
    color: black;
    font-size: 25px;
  }
  .slick-next:before {
    color: black;
    font-size: 25px;
  }
`;

const Image1 = styled.img`
  width: 450px;
  height: 284px;
  object-fit: cover;
  border-radius: 10px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

export default function GardenImgUI(props: any) {
  const settings: any = {
    dots: true,
    lazyLoad: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Wrapper>
      {props.video !== "" || props.data?.fetchBoardImage.length > 0 ? (
        <SliderGarden {...settings}>
          {props.video !== "" ? (
            <SliderChild>
              <Video src={props.video} controls />
            </SliderChild>
          ) : (
            ""
          )}
          {props.data?.fetchBoardImage.map((el: any, index: any) => (
            <div key={index}>
              {props.data?.fetchBoardImage.length > 0 && (
                <SliderChild>
                  <Image1 src={el.image} />
                </SliderChild>
              )}
            </div>
          ))}
        </SliderGarden>
      ) : (
        ""
      )}
    </Wrapper>
  );
}
