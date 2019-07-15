import React from "react";
import ItemCard from "../itemCard/itemCard";
import WithHeader from "../../hoc/withHeader/withHeader";

class Grocery extends React.PureComponent {
  componentDidMount() {
    this.props.onInitGroceryItems();
  }

  voteUpHandler = itemData => {
    this.props.onVoteUpItem(itemData);
  };

  voteDownHandler = itemData => {
    this.props.onVoteDownItem(itemData);
  };

  render() {
    const { groceryItems } = this.props;
    const formattedItems = Object.values(groceryItems);
    return (
      <WithHeader>
        <ItemCard
          onVoteUp={this.voteUpHandler}
          onVoteDown={this.voteDownHandler}
          groceryItems={formattedItems}
        />
      </WithHeader>
    );
  }
}

export default Grocery;
