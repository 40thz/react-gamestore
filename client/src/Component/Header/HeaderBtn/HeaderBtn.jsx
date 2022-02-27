import React from 'react'
import './HeaderBtn.scss'
import classNames from 'classnames'

const HeaderBtn = ({ icon, type, value }) => {

  const componentClasses = {
    'header-btn-border': value,
    'header-btn': value,
    'header-btn-icon': icon,
  }

  return <div className={ classNames( componentClasses ) }> {value || icon} </div>;
}

export default HeaderBtn
