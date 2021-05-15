import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <p style={contentLadyStyle}>元気です</p>
      <ColorfulMessage color="blue" message="お元気ですか？"></ColorfulMessage>
      <ColorfulMessage color="pink" message="元気です">
        わ
      </ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
