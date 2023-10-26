import { useState } from "react";
import "./ContactForm.css";

export const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageSent = () => {
    console.log("Send! " + message + " from " + email);
    setMessage("");
  };

  return (
    <div className="contact_form_box">
      <div className="contact_form_content_box">
        <h1>Contact me here!</h1>
        <input
          className="email_box"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="message_box"
          value={message}
          onChange={handleMessageChange}
        />
        <button onClick={handleMessageSent}>Send</button>
      </div>
    </div>
  );
};
