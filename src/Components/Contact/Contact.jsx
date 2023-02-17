import React, { useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const transition = { duration: 2, type: "spring" };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hn5lqvn",
        "template_ei9jxsg",
        form.current,
        "dD1CJrkDYVp5SRT8E"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="contact" id="Contact">
      <div className="c-left">
        <form ref={form} onSubmit={sendEmail}>
          <input
            name="user_name"
            type="text"
            className="user"
            placeholder="Name"
            required
          />
          <input
            name="user_email"
            type="email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="user"
            type="message"
            placeholder="Message"
            required
          />
          <input type="submit" className="button c-btn" value="Send" />
        </form>
      </div>
      <div className="c-right">
        <motion.div
          initial={{ top: "-30%", left: "50%" }}
          whileInView={{ left: "5%" }}
          transition={transition}
          className="i-contact"
        >
          <span style={{ color: darkMode ? "white" : "" }}>Get In Touch</span>
          <span>Contact me</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;