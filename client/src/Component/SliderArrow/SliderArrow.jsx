import React from "react";

import "./SliderArrow.scss"

const SliderArrow = (props) => {
  const { className, onClick, type } = props;

  if (type === "next") {
    return (
      <div className={className} onClick={onClick}>
        <div className="arrow-icon"></div>
      </div>
    );
  } else if (type === "prev") {
    return (
      <div className={className} onClick={onClick}>
        <div className="arrow-icon"></div>
      </div>
    );
  }
};

export default SliderArrow;
