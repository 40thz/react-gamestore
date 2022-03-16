import React from 'react'
import Slider from 'react-slick'

import './ProductSlider.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from '../../SliderArrow/SliderArrow'


const ProductSlider = () => {

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
            <div className="gallery__slider-btn active">
              Скриншоты
            </div>
            <div className="gallery__slider-btn">
              Трейлеры
            </div>
          </div>
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
      </div>
  )
}

export default ProductSlider
