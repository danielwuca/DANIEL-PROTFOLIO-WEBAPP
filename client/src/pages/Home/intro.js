import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;

  const handleScroll = () => {
    window.scrollTo({
      top: 650,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-[80vh] flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-4xl text-secondary">{welcomeText || ""}</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        {firstName || ""} {lastName || ""}
      </h1>
      <h1 className="text-6xl sm:text-3xl text-secondary font-semibold ">
        {caption || ""}
      </h1>
      <p className="text-secondary w-2/3">{description || ""}</p>
      <button
        className="border-2 border-tertiary text-tertiary px-10 py-3 rounded"
        onClick={handleScroll}
      >
        Get Started
      </button>
    </div>
  );
}

export default Intro;
