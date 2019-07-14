import React from "react";
import voteDownIcon from "../../assets/icons/vote-down.png";
import "./voteDown.css";

const voteDown = props => {
  return (
    <div className="Vote-Down">
      <img
        className="Vote-Image"
        src={voteDownIcon}
        alt="Vote Down"
        onclick={props.onClick}
      />
      <span>{props.voteCount}</span>
    </div>
  );
};

export default voteDown;
