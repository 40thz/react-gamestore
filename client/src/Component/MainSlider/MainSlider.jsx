import React from 'react'
import Slider from 'react-slick'

import "./MainSlider.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import ItemContentSlider from '../ItemContentSlider/ItemContentSlider';

const MainSlider = () => {
    const [sliderContent, setSliderContent] = React.useState();
    const [sliderBg, setSliderBg] = React.useState();
    console.log(sliderContent)
    const settingsBackgroundSlider = {
        className: 'main__slider',
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
        speed: 2000,
        arrows: false,
        fade: true,
    }
    return (
        <>
            <Slider {...settingsBackgroundSlider}>
                <div className='item'>
                    <img src="/bg.webp" alt="" />
                </div>
                <div className='item'>
                    <img src="/bg2.webp" alt="" />
                </div>
                <div className='item'>
                    <img src="/bg3.webp" alt="" />
                </div>
                <div className='item'>
                    <img src="/bg3.webp" alt="" />
                </div>
                <div className='item'>
                    <img src="/bg3.webp" alt="" />
                </div>
                <div className='item'>
                    <img src="/bg3.webp" alt="" />
                </div>
            </Slider>
            <Slider {...settingsSliderContent}>
                <ItemContentSlider gameName={'TOTAL WAR: WARHAMMER III'} gamePrice={2099} gameDiscount={50}/>
                <ItemContentSlider gameName={'LORDS OF THE FALLEN'} gamePrice={5099} />
                <ItemContentSlider gameName={'Dying Light Enhanced Edition'} gamePrice={3099} gameDiscount={50}/>
                <ItemContentSlider gameName={'God of War'} gamePrice={1099} />
                <ItemContentSlider gameName={'ELDEN RING'} gamePrice={2599}/>
                <ItemContentSlider gameName={'Destiny 2: The Witch Queen Deluxe Edition'} gamePrice={3099} gameDiscount={50}/>
            </Slider >
        </>
    )
}

export default MainSlider