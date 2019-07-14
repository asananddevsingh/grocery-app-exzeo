import { connect } from "react-redux";
import grocery from "../../components/grocery/grocery";

const mapStateToProps = state => {
  return {
    upVoteCount: state.upVoteCount,
    downVoteCount: state.downVoteCount
  };
};

const groceryContainer = connect(mapStateToProps)(grocery);
export default groceryContainer;
