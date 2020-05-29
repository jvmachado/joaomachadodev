import React from "react";
import TypeEffect from "../basics/type-effect/TypeEffect";

export default (props) => (
  <>
    <h1>{props.title}</h1>
    <h2>
      <TypeEffect text={props.subtitle} speed={150} eraseDelay={2500} />
    </h2>
  </>
);
