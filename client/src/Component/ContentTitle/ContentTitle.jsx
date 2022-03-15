import React from 'react'
import cn from 'classnames'
import './ContentTitle.scss'

const ContentTitle = ({name, error}) => {

  const options = {
    'content__title': !error,
    'content__title-error': error
  }

  return (
    <div className={cn(options)}>
      <h1>{name}</h1>
    </div>
  );
}

export default ContentTitle
