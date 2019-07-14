import { connect } from "react-redux";
import * as actions from "../../store/actions";
import grocery from "../../components/grocery/grocery";

const mapStateToProps = state => {
  return {
    upVoteCount: state.votes && state.votes.upVoteCount,
    downVoteCount: state.votes && state.votes.downVoteCount,
    groceryItems: state.items && state.items.groceryItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitGroceryItems: () => dispatch(actions.initGroceryItems())
  };
};

const groceryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(grocery);
export default groceryContainer;
