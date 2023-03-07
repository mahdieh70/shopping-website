import React, { useContext } from "react";

//router
import { useNavigate, Link } from "react-router-dom";

//component
import Cart from "../cart/index";

//style
import "./shopingCart.css";

//context
import { cartContext } from "../../context/CartContextProvider";

const ShoppingCart = () => {
  const { state, dispatch } = useContext(cartContext);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <div className="cartBanner">
        <h1>Cart</h1>
      </div>
      <div className="cartContainer">
        <div className="cartDetailsContainer">
          {state.selectedItems.map((item) => (
            <Cart key={item.id} data={item} />
          ))}
        </div>
        <div className="paymentsContainer">
          {state.itemsCounter > 0 && (
            <div className="paymentsArea">
              <p>
                <span>Total Items:</span>
                {state.itemsCounter}
              </p>
              <p>
                <span>Shipping:</span>
                Free
              </p>
              <p>
                <span>Total Payments:</span>
                {state.total} $
              </p>
              <div className="buttonsArea">
                <button className="checkout" onClick={handleClick}>
                  Check Out
                </button>
                <button
                  className="clear"
                  onClick={() => dispatch({ type: "CLEAR" })}
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>
        {state.itemsCounter === 0 && (
          <div className="complete">
            <h3>Your shopping cart is empty!</h3>
            <Link to="/products">Go To Shop</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
