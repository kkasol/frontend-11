import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Wrapper = styled.div`
  height: 400px;
  width: 450px;
  margin-left: 40%;
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
        <SliderImage src="/bird.jpg" />
        <SliderImage src="/bird.jpg" />
        <SliderImage src="/bird.jpg" />
      </Slider>
    </Wrapper>
  );
}
