import React from 'react'
import './Basketcontainer.scss'
import Basketcart from "../Basketcart/Basketcart";
import ContentTitle from "../../ContentTitle/ContentTitle";
import { useSelector } from 'react-redux'

const Basketcontainer = () => {
  const basketItems = useSelector(state => state.cart)
  //const test = useSelector((state) => state["catalogApi"]);

  return (
    <div className="container">
      <ContentTitle name={"Мои заказы"} />
      <div className="basket__inside">
        <div className="basket__inside-left">
          {basketItems?.map((item) => (
            <Basketcart item={item} />
          ))}
        </div>
        <div className="basket__inside-right"></div>
      </div>
    </div>
  );
}

export default Basketcontainer