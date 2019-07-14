import React from "react";
import Header from "../../components/header/header";
import "./withHeader.css";

const withHeader = props => {
  return (
    <>
      <Header />
      <div className="Container">{props.children}</div>
    </>
  );
};

export default withHeader;
