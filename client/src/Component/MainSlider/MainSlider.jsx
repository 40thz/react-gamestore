import React from 'react'
import Slider from 'react-slick'

import "./MainSlider.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useGetPreviewQuery } from "../../store";
import ItemContentSlider from '../ItemContentSlider/ItemContentSlider';
import Arrow from '../SliderArrow/SliderArrow'

const MainSlider = () => {

  const { data = [], isLoading } = useGetPreviewQuery();
  const [sliderContent, setSliderContent] = React.useState();
  const [sliderBg, setSliderBg] = React.useState();
  //console.log(data);
  const settingsBackgroundSlider = {
    className: "main__slider",
    ref: (slider) => setSliderBg(slider),
    asNavFor: sliderContent,
    dots: false,
    speed: 2000,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const settingsSliderContent = {
    className: "content__slider",
    ref: (slider) => setSliderContent(slider),
    asNavFor: sliderBg,
    dots: true,
    arrows: true,
    autoplay: true,
    speed: 2000,
    fade: true,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
  };

  return (
    <div style={{height: '100vh'}}>
      {!isLoading && (
        <>
          <Slider {...settingsBackgroundSlider}>
            {data.map((bg, i) => (
              <div key={i} className="item">
                <img src={bg.uploadedFile} alt="" />
              </div>
            ))}
          </Slider>
{/* 
          <Slider {...settingsSliderContent}>
            {data.map((product, i) => (
              <ItemContentSlider key={i} product={product.product} />
            ))}
          </Slider> */}
        </>
      )}
    </div>
  );
}

export default MainSlider