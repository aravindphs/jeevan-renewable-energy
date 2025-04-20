import React from "react";
import "./Contact.css";
import { contacts } from "../../data";

const Contact = () => {
  return (
    <section id="contact">
      <div className="bg__image"></div>
      <div className="overlay"></div>
      <div className="container">
        <div className="column">
          {contacts.map((contact, index) => (
            <div className="contact__info" key={index}>
              <div className="icon__container">{contact.icon}</div>
              <div className="details">
                <p className="text__muted">{contact.name}</p>
                <h3 className="value">{contact.value}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="column form__container">
          <div className="form__top">
            <h3 className="sub__title g-text">Keep In Touch</h3>
            <p>
              Stay connected with us for the latest updates. Let’s build a
              brighter, greener future together!
            </p>
          </div>
          <div className="form__middle">
            <div className="row">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                className="control"
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                className="control"
              />
            </div>
            <div className="row">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="control"
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                className="control"
              />
            </div>
            <textarea
              name="message"
              id=""
              cols={30}
              rows={5}
              placeholder="Message"
              className="control"
            ></textarea>
          </div>
          <div className="form__bottom">
            <button className="btn btn__primary">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
