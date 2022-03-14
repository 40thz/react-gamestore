import React from 'react'
import './HeaderBtn.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const HeaderBtn = ({ icon, value, href='' }) => {

  const componentClasses = {
    'header-btn-border': value,
    'header-btn': value,
    'header-btn-icon': icon,
  }

  return (
    <Link to={href}>
      <div className={classNames(componentClasses)}> {value || icon} </div>
    </Link>
  );
}

export default HeaderBtn
