import React from "react";

function Welcome({ name = "Flavius" }) {
  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
}

export default Welcome;
