import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default (props) => {
  return (
    <ReactTypingEffect
      text={props.text}
      speed={props.speed}
      eraseDelay={props.eraseDelay}
    />
  );
};
