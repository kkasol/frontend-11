import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Wrapper = styled.div`
  height: 400px;
`;
const SliderImage = styled.img`
  height: 350px;

  margin: auto;
`;
export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrow: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderImage src="/bird.jpg" />
        </div>
        <div>
          <SliderImage src="/bird.jpg" />
        </div>
        <div>
          <SliderImage src="/bird.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
