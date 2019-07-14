import React from "react";
import ItemCard from "../itemCard/itemCard";
import WithHeader from "../../hoc/withHeader/withHeader";

const grocery = props => {
  return (
    <WithHeader>
      <div className="Container">
        <ItemCard
          upVoteCount={props.upVoteCount}
          downVoteCount={props.downVoteCount}
        />
      </div>
    </WithHeader>
  );
};

export default grocery;
