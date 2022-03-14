import React from 'react'
import Catalog from '../Component/Catalog/Catalog'
import MainSlider from '../Component/MainSlider/MainSlider';
import Overlay from "../Component/Overlay/Overlay";
import Advantages from "../Component/Advantages/Advantages"

const Homepage = () => {

  return (
    <div>
      <Overlay />
      <MainSlider />
      <Advantages />
      <Catalog />
    </div>
  );
}

export default Homepage
