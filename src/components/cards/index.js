import { useState} from "react";

import { shorten } from "../../helpers/functions";

//modal
import Modal from "../modal";

//modalContent
import { ModalContent } from "./modalContent";

//style
import "./Cards.css";

const Cards = ({ productData }) => {
  const [showModal, setIsShowModal] = useState(false);

  return (
    <div>
      <Modal
        width={900}
        isShow={showModal}
        onClose={() => setIsShowModal((prev) => !prev)}
      >
        <ModalContent
          image={productData.image}
          title={productData.title}
          price={productData.price}
          category={productData.category}
          description={productData.description}
          id={productData.id}
        />
      </Modal>
      <div className="container">
        <div className="products-area">
          <img src={productData.image} className="product-image" alt="pic" />
          <button
            onClick={() => setIsShowModal((prev) => !prev)}
            className="quickView"
          >
            Quick View
          </button>
        </div>
        <div className="productsDetail">
          <p className="title">{shorten(productData.title)}</p>
          <p className="price">{productData.price} $</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
