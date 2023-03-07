import React, { useContext } from "react";

//context
import { cartContext } from "../../context/CartContextProvider";

import { shorten } from "../../helpers/functions";

//style
import "../cart/cart.css";

const Cart = (props) => {
  const { dispatch } = useContext(cartContext);
  const { image, title, price, quantity } = props.data;

  return (
    <>
      <div className="cartDetailsArea">
        <img className="cartImage" src={image} alt="cartPic" />
        <div className="data">
          <h3>{shorten(title)}</h3>
          <p>{price} $</p>
        </div>
        <div className="buttonWrapper">
          {quantity > 1 ? (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            >
              -
            </button>
          ) : (
            <button
              className="trashBtn"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            >
              <i className="fa-solid fa-trash-can "></i>
            </button>
          )}
          <span>{quantity}</span>
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
