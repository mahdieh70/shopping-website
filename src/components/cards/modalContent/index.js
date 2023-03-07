import { useContext } from "react";

//style
import "./ModalContent.css";

//functions
import { isInCart, quantityCount,shorten } from "../../../helpers/functions";

//context
import { cartContext } from "../../../context/CartContextProvider";

const ModalContent = ({
  title,
  image,
  price,
  category,
  description,
  id,
  children,
}) => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className="modal-container">
      <div className="image-container">
        <img src={image} alt="product" />
      </div>
      <div className="detailsContainer">
        <h3>{shorten(title)}</h3>
        <p>
          <span>category: </span>
          {category}
        </p>
        <p>
          <span>price: </span>
          {price} $
        </p>
        <p className="text">
          <span>description: </span>
          {description}
        </p>
        <div className="buttonContainer">
          {quantityCount(state, id) > 1 && (
            <button
              className="mines"
              onClick={() =>
                dispatch({
                  type: "DECREASE",
                  payload: { title, image, price, id },
                })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, id) === 1 && (
            <button
              className="remove"
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: { title, image, price, id },
                })
              }
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          )}
          {quantityCount(state, id) > 0 && (
            <span className="quantityCount">{quantityCount(state, id)}</span>
          )}
          {isInCart(state, id) ? (
            <button
              className="plus"
              onClick={() =>
                dispatch({
                  type: "INCREASE",
                  payload: { title, image, price, id },
                })
              }
            >
              +
            </button>
          ) : (
            <button
              className="addToCart"
              onClick={() =>
                dispatch({
                  type: "ADD_ITEM",
                  payload: { title, image, price, id },
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export { ModalContent };
