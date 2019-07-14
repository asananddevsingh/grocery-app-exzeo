import React from "react";
import voteUpIcon from "../../assets/icons/vote-up.png";
import "./voteUp.css";

const voteUp = props => {
  return (
    <div className="Vote-Up">
      <img
        className="Vote-Image"
        src={voteUpIcon}
        alt="Vote Up"
        onClick={props.onClick}
      />
      <span>{props.voteCount}</span>
    </div>
  );
};

export default voteUp;
