"use client";

import { React, useState } from "react";

function VisitorCount() {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <input
        className="border-pink-200 border-solid text-lg m-2 font-medium text-gray border rounded-lg p-3"
        type="number"
        value={count}
      />
      <button
        className="bg-pink-200 p-3 text-lg rounded-lg m-2"
        onClick={increment}
      >
        Add Visitors
      </button>
    </div>
  );
}

export default VisitorCount;
