import React from 'react'
import cn from 'classnames'
import './ContentTitle.scss'

const ContentTitle = ({ name, type }) => {

  const options = {
    'content__title': !type,
    'content__title-error': type
  }

  return (
    <div className={cn(options)}>
      <h1>{name}</h1>
    </div>
  );
}

export default ContentTitle
