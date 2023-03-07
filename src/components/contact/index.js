import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

//style
import "./contact.css";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="errorMessage">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="errorMessage">{meta.error}</div>
      ) : null}
    </>
  );
};

const Contact = () => {
  return (
    <div>
      <div className="contactBanner">
        <h1>Contact Us</h1>
      </div>
      <div className="contactContainer">
        <div className="contactDetails">
          <div className="addressBox">
            <p>
              <span>Address: </span>125, Park street aven, Brocklyn, Newyork.
            </p>
          </div>
          <div className="phoneBox">
            <p>
              <span>Phone: </span>1800-121-3637
            </p>
          </div>
          <div className="emailBox">
            <span>Email: </span>info@deneb.com
          </div>
          <div className="websiteBox">
            <span>Website: </span>yoursite.com
          </div>
        </div>
        <div className="messageContainer">
          <h1>GET IN TOUCH</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio
            justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac
            ex venenatis ultricies at cursus mauris.
          </p>
          <Formik
            initialValues={{ name: "", email: "", subject: "", textArea: "" }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              subject: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
              textArea: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              JSON.stringify(values, null, 2);
              setSubmitting(false);
            }}
          >
            <Form className="form">
              <MyTextInput name="name" type="text" placeholder="Your Name" />
              <MyTextInput name="email" type="email" placeholder="Your Email" />
              <MyTextInput name="subject" type="text" placeholder="Subject" />
              <MyTextArea name="textArea" rows="5" placeholder="Your Message" />
              <button className="submitBtn" type="submit">
                Send Message
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
