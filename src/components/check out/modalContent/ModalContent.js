import React from "react";

//style
import "../../check out/modalContent/modalContent.css";

//router
import { useNavigate } from "react-router-dom";

const ModalContent = () => {
  let navigate = useNavigate();
const clickHandler=()=>{
  navigate("/");
}
  return (
    <div className="orderModalContainer">
      <p>Your order has been successfully placed.</p>
      <button onClick={clickHandler}>Go to home Page</button>
    </div>
  );
};

export default ModalContent;
