import React from 'react'
import './SubInfo.scss'

import SubInfoItem from './SubInfoItem/SubInfoItem'

const SubInfo = ({ data }) => {
  return (
    <>
      <SubInfoItem title='Поддержка языков' info={data.language}/>
      <SubInfoItem title='Регион активации' info={data.activationRegion}/>
      <SubInfoItem title='Сервис активации' info={data.service}/>
    </>
  )
}

export default SubInfo