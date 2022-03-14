import React from 'react'

import './AdvantageCart.scss'

const AdvantageCart = ({ icon, name}) => {
  return (
    <div className="advantage__cart">
      <div className="advantage__cart-icon">
        <img src={icon} alt="Приемущество" />
      </div>
      <div className="advantage__cart-name">
        {name}
      </div>
    </div>
  );
}

export default AdvantageCart