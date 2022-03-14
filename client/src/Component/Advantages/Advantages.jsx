import React from 'react'

import './Advantages.scss'
import AdvantageCart from './AdvantageCart/AdvantageCart'

const Advantages = () => {
  return (
    <div className="container">
      <div className="advantages">
        <AdvantageCart
          icon={"https://gabestore.ru/images/Gabestore_icons_discounts.png"}
          name={"Скидки круглый год"}
        />
        <AdvantageCart
          icon={"https://gabestore.ru/images/Gabestore_icons_support_24.png"}
          name={"Круглосуточная поддержка"}
        />
        <AdvantageCart
          icon={"https://gabestore.ru/images/Gabestore_icons_achievement_system.png"}
          name={"Система достижений"}
        />
        <AdvantageCart
          icon={"https://gabestore.ru/images/Gabestore_icons_active_community.png"}
          name={"Активное коммьюнити"}
        />
        <AdvantageCart
          icon={"https://gabestore.ru/images/Gabestore_icons_charity_events.png"}
          name={"Любовьк играм"}
        />
      </div>
    </div>
  );
}

export default Advantages