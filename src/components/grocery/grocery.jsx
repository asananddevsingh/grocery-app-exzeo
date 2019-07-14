import React from "react";
import ItemCard from "../itemCard/itemCard";
import WithHeader from "../../hoc/withHeader/withHeader";

class Grocery extends React.PureComponent {
  componentDidMount() {
    this.props.onInitGroceryItems();
  }

  render() {
    const { upVoteCount, downVoteCount, groceryItems } = this.props;
    return (
      <WithHeader>
        <div className="Container">
          <ItemCard
            upVoteCount={upVoteCount}
            downVoteCount={downVoteCount}
            groceryItems={groceryItems}
          />
        </div>
      </WithHeader>
    );
  }
}

export default Grocery;
