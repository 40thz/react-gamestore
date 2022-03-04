import React from 'react'
import { Link } from 'react-router-dom'

import './Button.scss'

const Button = ({ value, onClick, to='' }) => {
  return (
    <Link to={to} onClick={onClick} className="btn">
      {value}
    </Link>
  );
};

export default Button