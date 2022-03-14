import React from 'react'
import './Basketcontainer.scss'
import Basketcart from "../Basketcart/Basketcart";
import ContentTitle from "../../ContentTitle/ContentTitle";
import { useSelector } from 'react-redux'
import BasketTotal from '../BasketTotal/BasketTotal'
import Button from '../../Button/Button'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Basketcontainer = () => {
  const basketItems = useSelector(state => state.cart)
  //const test = useSelector((state) => state["catalogApi"]);

  return (
    <div className="container">
      {basketItems.length ? (
        <>
          <ContentTitle name="Мои заказы" />
          <div className="basket__inside">
            <div className="basket__inside-left">
              {basketItems?.map((item) => (
                <Basketcart item={item} />
              ))}
            </div>
            <div className="basket__inside-right">
              <BasketTotal />
            </div>
          </div>
        </>
      ) : (
        <div className="basketIsClear">
          <ContentTitle
            name="В вашей корзине еще ничего нет :("
            type={"error"}
          />
          <Button value="Перейти в каталог" to="/catalog" />
        </div>
      )}
    </div>
  );
}

export default Basketcontainer