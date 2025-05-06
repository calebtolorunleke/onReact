import React from "react";

btn.addEvent;
const EvenetHandling = () => {
  const handleClick = () => {
    console.log("user Clicked");
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white font-bold w-[120px] h-[40px] rounded-lg p-1"
      >
        Click Me!
      </button>
    </div>
  );
};

export default EvenetHandling;
