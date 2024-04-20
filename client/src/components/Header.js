import React from "react";

function Header() {
  const scrollToBottom = () => {
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // for smooth scrolling
    });
  };
  return (
    <div className="p-5 bg-primary flex justify-between">
      <h2 className="text-orange-500 text-5xl font-semibold">
        Daniel Tech: v1
      </h2>
      <button className="text-gray-400 text-2xl" onClick={scrollToBottom}>
        Contact Us
      </button>
    </div>
  );
}

export default Header;
