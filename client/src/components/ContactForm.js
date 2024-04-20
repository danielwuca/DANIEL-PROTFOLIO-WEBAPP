import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm({ onClose }) {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-white");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wskth39",
        "template_h2x98i6",
        form.current,
        "B_urJdYUVdVmlaP6b"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage(
            "Email sent successfully! (Do not repetitively click button)"
          );
          setMessageColor("text-green-400"); // Success message in green
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Failed to send email, try again!");
          setMessageColor("text-red-400"); // Error message in red
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4 bg-gray-800 p-6 rounded-lg text-white relative"
    >
      <label className="block">Name</label>
      <input
        type="text"
        name="user_name"
        className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-700"
      />

      <label className="block">Email</label>
      <input
        type="email"
        name="user_email"
        className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-700"
      />

      <label className="block">Message</label>
      <textarea
        name="message"
        className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-700 h-32"
      />

      <div className="flex items-center space-x-3">
        <input
          type="submit"
          value="Send"
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
        />
        <span className={messageColor}>{message}</span>
      </div>
    </form>
  );
}

export default ContactForm;
