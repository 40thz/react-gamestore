import React from 'react'
import './Button.scss'
const Button = ({ value, onClick }) => {
  return (
    <div onClick={onClick} className="btn">
      {value}
    </div>
  );
};

export default Button