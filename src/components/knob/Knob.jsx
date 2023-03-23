import React from "react";

const Knob = (props) => {
  return (
    <div
      style={{ border: "2px solid salmon", margin: "20px", padding: "20px" }}
    >
      <h5>This is Knob Component</h5>
      <p>Steps hear is: {props.steps}</p>
    </div>
  );
};

export default Knob;
