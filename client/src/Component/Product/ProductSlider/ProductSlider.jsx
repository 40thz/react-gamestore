import React from 'react'
import Slider from 'react-slick'
import cn from 'classnames'
import './ProductSlider.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from '../../SliderArrow/SliderArrow'


const ProductSlider = () => {

  const [changeTab, setChangeTab] = React.useState(false)

  const settingsGallery = {
    className: "gallery__slider",
    dots: false,
    infinite: false,
    swipe: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
  };

return (
        <div className="gallery__slider-container">
          <div className="gallery__slider-nav">
            <div onClick={() => setChangeTab(false)} className={cn("gallery__slider-btn", {active: !changeTab})}>
              Скриншоты
            </div>
            <div onClick={() => setChangeTab(true)} className={cn("gallery__slider-btn", {active: changeTab})}>
              Трейлеры
            </div>
          </div>
        {!changeTab ?
        <Slider {...settingsGallery}>
            <div className="gallery-item">
              <img src="https://static.gabestore.ru/screen_product/YUPQDNdMMPACC3lyPrHYzJ4sMnHI_KGW.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="https://static.gabestore.ru/screen_product/YUPQDNdMMPACC3lyPrHYzJ4sMnHI_KGW.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="https://static.gabestore.ru/screen_product/YUPQDNdMMPACC3lyPrHYzJ4sMnHI_KGW.jpg" alt="" />
            </div> 
        </Slider> :
        <Slider {...settingsGallery}>
            <div className="gallery-item">
              <img src="https://4.bp.blogspot.com/-iY6x4Vl6QGg/XQ0dWZplFPI/AAAAAAAAHlo/kBJCNsK-K3AyrNviyuDhKbNZDtlns2kewCKgBGAs/w5120-h2880-c/control-uhdpaper.com-4K-13.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="https://static.gabestore.ru/screen_product/YUPQDNdMMPACC3lyPrHYzJ4sMnHI_KGW.jpg" alt="" />
            </div>
              <div className="gallery-item">
              <img src="https://static.gabestore.ru/screen_product/YUPQDNdMMPACC3lyPrHYzJ4sMnHI_KGW.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="https://static.gabestore.ru/screen_product/YUPQDNdMMPACC3lyPrHYzJ4sMnHI_KGW.jpg" alt="" />
            </div>
              <div className="gallery-item">
              <img src="https://static.gabestore.ru/screen_product/YUPQDNdMMPACC3lyPrHYzJ4sMnHI_KGW.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="https://static.gabestore.ru/screen_product/YUPQDNdMMPACC3lyPrHYzJ4sMnHI_KGW.jpg" alt="" />
            </div>
        </Slider>
        }
      </div>
  )
}

export default ProductSlider
