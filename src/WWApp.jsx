import React, { useEffect, useState } from "react";
// default exportされている関数を呼び出すときは↓で良い
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

// World Watanabe App
export const WWApp = () => {
  console.log("レンダリング");
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
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickFaceShowFlagFlip = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  // 指定した変数が変化したときだけ呼び出される
  useEffect(() => {
    console.log("useEffect");
    // 3の倍数のときだけ顔が出る仕様にする
    if (num > 0) {
      if (num % 3 === 0) {
        setFaceShowFlag(true);
      } else {
        setFaceShowFlag(false);
      }
    }
  }, [num]);

  // Too many render関連のエラーが出る実装
  // if (num % 3 === 0) {
  //   setFaceShowFlag(true);
  // } else {
  //   setFaceShowFlag(false);
  // }

  return (
    <>
      <div>
        <h1 style={{ color: "red" }}>こんにちは！</h1>
        <p style={contentStyle}>お元気ですか？</p>
        <p style={contentLadyStyle}>元気です</p>
        <ColorfulMessage
          color="blue"
          message="お元気ですか？"
        ></ColorfulMessage>
        <ColorfulMessage color="pink" message="元気です">
          わ
        </ColorfulMessage>
        <button onClick={onClickButton}>ボタン</button>
      </div>
      <div>
        <button onClick={onClickCountUp}>カウント</button>
      </div>
      <div>
        <button onClick={onClickFaceShowFlagFlip}>ON/OFF</button>
        {faceShowFlag && <p>{num}(゜▽゜)</p>}
        {faceShowFlag || <p>{num}(・_・)</p>}
      </div>
    </>
  );
};
