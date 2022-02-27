import React from 'react'
import Catalog from '../Component/Catalog/Catalog'
import MainSlider from '../Component/MainSlider/MainSlider';
import Overlay from "../Component/Overlay/Overlay";

const Homepage = () => {

  return (
    <div>
      <Overlay />
      <MainSlider />
      <Catalog />
    </div>
  );
}

export default Homepage
