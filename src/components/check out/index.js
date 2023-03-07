import React, { useState, useContext, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

//style
import "./checkout.css";

//context
import { cartContext } from "../../context/CartContextProvider";

//components
import OrderDetails from "../orderDetails";
import Modal from "../modal";
import ModalContent from "../check out/modalContent/ModalContent";

const Checkout = () => {
  const { state, dispatch } = useContext(cartContext);
  const [showModal, setIsShowModal] = useState(false);
  let inputRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
    },

    //form validation
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Firstname Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Lastname Required"),
      address: Yup.string().required("Address Required"),
      phone: Yup.string().required("Phone Required"),
    }),

    //submit button function
    onSubmit: (values, { resetForm, validateForm }) => {
      if (state.total > 0) {
        validateForm()
          .then(() => {})
          .catch(() => {});
        resetForm({ values: "" });
        JSON.stringify(values, null, 2);
        dispatch({ type: "PLACE ORDER" });
        setIsShowModal((prev) => !prev);
      }
    },
  });

  //focus on input when page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Modal
        width={500}
        isShow={showModal}
        onClose={() => setIsShowModal((prev) => !prev)}
      >
        <ModalContent />
      </Modal>
      <div className="checkoutBanner">
        <h1>Check Out</h1>
      </div>
      <div className="checkoutContainer">
        <div className="bilingDetails">
          <h3 className="billingHeader">BILLING DETAILS</h3>

          <form onSubmit={formik.handleSubmit}>
            <div className="formDetailsContainer">
              <div className="inputsContainer">
                <label htmlFor="firstname">First Name</label>
                <input
                  className="firstname"
                  name="firstName"
                  type="text"
                  disabled={state.total === 0}
                  ref={inputRef}
                  {...formik.getFieldProps("firstName")}
                />

                {formik.errors.firstName ? (
                  <div className="errorText">{formik.errors.firstName}</div>
                ) : null}
              </div>

              <div className="inputsContainer">
                <label htmlFor="lastname">Last Name</label>
                <input
                  className="lastname"
                  name="lastName"
                  type="text"
                  disabled={state.total === 0}
                  {...formik.getFieldProps("lastName")}
                />

                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="errorText">{formik.errors.lastName}</div>
                ) : null}
              </div>

              <div className="inputsContainer">
                <label htmlFor="firstname">Address</label>
                <input
                  className="address"
                  name="address"
                  type="text"
                  disabled={state.total === 0}
                  {...formik.getFieldProps("address")}
                />

                {formik.touched.address && formik.errors.address ? (
                  <div className="errorText">{formik.errors.address}</div>
                ) : null}
              </div>

              <div className="inputsContainer">
                <label htmlFor="phone">Phone</label>
                <input
                  className="phone"
                  name="phone"
                  type="number"
                  disabled={state.total === 0}
                  {...formik.getFieldProps("phone")}
                />

                {formik.touched.phone && formik.errors.phone ? (
                  <div className="errorText">{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              disabled={state.total === 0}
              className={state.total === 0 ? "deactive" : "placeOrder"}
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="orderContainer">
          <div className="orderDetailsTable">
            <div className="headerColumn">
              <div className="headerRow">Your order Details</div>
            </div>
            <div className="column">
              <div className="productRow">Product</div>
              <div className="priceRow">Price</div>
              <div className="quantityRow">Quantity</div>
            </div>
            {state.selectedItems.map((order) => (
              <OrderDetails
                key={order.id}
                product={order.title}
                price={order.price}
                quantity={order.quantity}
                total={order.total}
              />
            ))}
            <div className="footerColumn">
              <div className="totalPriceRow">
                <span>Total Price: </span>
                {state.total} $
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
