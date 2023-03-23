import React from "react";
import DeviceDetails from "../DeviceDetails/DeviceDetails";

const Device = (props) => {
  console.log(props);
  return (
    <div>
      <h3>I Have Device: {props.name}</h3>
      <DeviceDetails price={props.price}></DeviceDetails>
    </div>
  );
};

export default Device;
