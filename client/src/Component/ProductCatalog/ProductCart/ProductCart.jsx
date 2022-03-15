import React from "react";

import "./ProductCart.scss";

import Button from "../../Button/Button";

import { useAction } from "../../../hooks/useActions";
import { useExistInCart } from "../../../hooks/useExistInCart";
import { Link } from "react-router-dom"

const ProductCart = ({ item }) => {
  const { addItem } = useAction();
  const isExistInCart = useExistInCart(item);

  return (
    <Link to={`/product/${item._id}`} className="product__cart">
      <img src={item.uploadedFile} alt="" />
      <div className="product__cart-center">
        <div className="product__cart-btn">
          <Button
            to={isExistInCart && "/basket"}
            onClick={() => !isExistInCart && addItem(item)}
            value={isExistInCart ? "Уже в коризне" : "Купить"}
          />
        </div>
        <div className="product__cart-price">
          <span>{item.priceWithDiscount ? item.priceWithDiscount : item.price} ₽</span>
          {item.discount &&
           <div className="discount">{item.discount} %</div>
          }
        </div>
      </div>
      <div className="product__cart-name">{item.name}</div>
    </Link>
  );
};

export default ProductCart;
