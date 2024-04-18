import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]">
      <div className="flex flex-col">
        <div className="flex gap-5 text-6xl font-semibold sm:text-3xl">
          <h2 className="text-white d">D</h2>
          <h2 className="text-white a">A</h2>
          <h2 className="text-white n">N</h2>
          <h2 className="text-white i">I</h2>
          <h2 className="text-white e">E</h2>
          <h2 className="text-white l">L</h2>
        </div>
        <div className="flex gap-5 text-4xl sm:text-xl">
          <h2> - Rise and Grind</h2>
        </div>
      </div>
    </div>
  );
}

export default Loader;
