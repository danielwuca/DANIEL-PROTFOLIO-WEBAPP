import React from "react";
import ChatBot from "react-simple-chatbot";

// Function to get a random message from an array
const getRandomJoke = () => {
  const jokes = [
    "What do you call fake spaghetti? An impasta!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    "Did you hear about the mathematician who’s afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "What do you call a cheese that isn't yours? Nacho cheese!",
    "Why can’t you give Elsa a balloon? Because she will let it go!",
  ];
  // Return a random joke
  return jokes[Math.floor(Math.random() * jokes.length)];
};

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
      { value: 1, label: "Leave a message to Daniel", trigger: "6" },
      { value: 2, label: "I need a help", trigger: "7" },
      { value: 3, label: "Tell me a joke", trigger: "8" },
    ],
  },
  {
    id: "6",
    message:
      "Scrolling down to the bottom of page and leave your message in the form :)",
    trigger: "9",
  },
  {
    id: "7",
    message:
      "Better call Daniel! I know a guy who knows a guy who knows another guy can help you out :)",
    trigger: "9",
  },
  {
    id: "8",
    message: getRandomJoke(),
    trigger: "9",
  },
  {
    id: "9",
    options: [
      { value: 1, label: "Leave a message to Daniel", trigger: "6" },
      { value: 2, label: "I need a help", trigger: "7" },
      { value: 3, label: "Wanna a new joke?", trigger: "8" },
      { value: 4, label: "End", trigger: "10" },
    ],
  },
  {
    id: "10",
    message:
      "Thanks for using me. Currently, my owner is testing me, please wait for next version thanks :)",
    end: true,
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
