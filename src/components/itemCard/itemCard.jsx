import React from "react";
import "./itemCard.css";
import ItemImage from "../itemImage/itemImage";
import VoteUp from "../voteUp/voteUp";
import VoteDown from "../voteDown/voteDown";

const itemCard = props => {
  const onVoteUp = () => {
    alert(1);
  };

  return (
    <div className="Item">
      <div>
        <ItemImage
          imagePath={
            "https://raw.githubusercontent.com/asananddevsingh/grocery-app-exzeo/master/src/assets/items/01-sugar.jpg"
          }
          altText={props.itemName}
        />
      </div>
      <div className="Item-Name">{props.itemName}</div>
      <div className="Vote-Wrapper">
        <VoteUp voteCount={props.upVoteCount} onClick={onVoteUp} />
        <VoteDown voteCount={props.downVoteCount} />
      </div>
    </div>
  );
};

export default itemCard;
