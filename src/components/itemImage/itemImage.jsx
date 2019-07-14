import React from "react";
import sugarIcon from "../../assets/items/01-sugar.jpg";
import "./itemImage.css";

const itemImage = props => {
  return <img className="Item-Image" src={sugarIcon} alt={props.altText} />;
};

export default itemImage;
