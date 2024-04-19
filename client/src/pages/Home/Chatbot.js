import React from "react";
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "0",
    message: "Welcome to react chatbot!",
    trigger: "1",
  },
  {
    id: "1",
    message: "What's your name?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    trigger: "4",
  },
  {
    id: "4",
    message: "Anything I can help with :) Choose one:",
    trigger: "5",
  },
  {
    id: "5",
    options: [
      { value: 1, label: "Contact Daniel", trigger: "6" },
      { value: 2, label: "Leave a message", trigger: "7" },
      { value: 3, label: "Share Daniel with your contact", trigger: "8" },
    ],
  },
  {
    id: "6",
    message:
      "Send me a email to danielwuca156@yahoo.com or message to 5197019078",
    trigger: "9",
  },
  {
    id: "7",
    message:
      "Send me a email to danielwuca156@yahoo.com or message to 5197019078",
    trigger: "9",
  },
  {
    id: "8",
    message:
      "Send me a email to danielwuca156@yahoo.com or message to 5197019078",
    trigger: "9",
  },
  {
    id: "9",
    message:
      "Thanks for using me. Currently, my owner is testing me, please wait for next version thanks :)",
  },
];

function Chatbot() {
  return (
    <div>
      <ChatBot steps={steps} floating={true} />
    </div>
  );
}

export default Chatbot;
