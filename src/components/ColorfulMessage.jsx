import React from "react";

// default export時は↓で良い
// const ColorfulMessage = (props) => {
export const ColorfulMessage = (props) => {
  console.log("レンダリングに伴う呼び出し");
  // const contentStyle = {
  //   color: props.color,
  //   fontSize: "18px"
  // };
  // return (
  //   <p style={contentStyle}>
  //     {props.message}
  //     {props.children}
  //   </p>
  // );
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return (
    <p style={contentStyle}>
      {props.message}
      {children}
    </p>
  );
};

// defaultでexportすると、importするときにtypoに気が付きにくい
// export default ColorfulMessage;
