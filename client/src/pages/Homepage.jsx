import React from 'react'
import Catalog from '../Component/Catalog/Catalog'
import Overlay from "../Component/Overlay/Overlay";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {

  return (
    <div>
      <Overlay />
      <Catalog />
    </div>
  );
}

export default Homepage
