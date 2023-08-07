import React from "react";
import '../Sass/main.scss'
const Wrapper = (props) => {
  return (
  <div className="container-fluid ">
  <div className="wrapper container shadow">{props.children}</div>
  </div>
  )
};

export default Wrapper;
