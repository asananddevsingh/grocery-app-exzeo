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
    <>
      {props.groceryItems &&
        props.groceryItems.map(item => {
          return (
            <div className="Item" key={item.id}>
              <div>
                <ItemImage imagePath={item.imagePath} altText={item.name} />
              </div>
              <div className="Item-Name">{item.name}</div>
              <div className="Vote-Wrapper">
                <VoteUp voteCount={item.upVoteCount} onClick={onVoteUp} />
                <VoteDown voteCount={item.downVoteCount} />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default itemCard;
