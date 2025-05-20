import React, { useState } from "react";
import "../Contact/Contact.css";
import './Modal.css'
import { contacts } from "../../data";

const Modal = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://formsubmit.co/ajax/info.jeevan02@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact">
      <div className="bg__image"></div>
      <div className="overlay"></div>
      <div className="container">
        {/* <div className="column">
          {contacts.map((contact, index) => (
            <div className="contact__info" key={index}>
              <div className="icon__container">{contact.icon}</div>
              <div className="details">
                <p className="text__muted">{contact.name}</p>
                <h3 className="value">{contact.value}</h3>
              </div>
            </div>
          ))}
        </div> */}
        <div className="column form__container">
          <div className="form__top">
            <h3 className="sub__title g-text">Keep In Touch</h3>
            <p>
              Stay connected with us for the latest updates. Let’s build a
              brighter, greener future together!
            </p>
          </div>
          <form className="form__middle" onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                className="control"
                value={formData.firstname}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                className="control"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="control"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                className="control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              cols={30}
              rows={5}
              placeholder="Message"
              className="control"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="form__bottom">
              <button type="submit" className="btn btn__primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Modal;
