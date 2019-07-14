import * as actionTypes from "./actionsTypes";
import axios from "../../utils/axiosUtil";

const setGroceryItems = groceryItems => {
  return {
    type: actionTypes.FETCH_GROCERY_ITEMS_SUCCESS,
    groceryItems: groceryItems
  };
};

const fetchGroceryItemsFail = () => {
  return {
    type: actionTypes.FETCH_GROCERY_ITEMS_FAIL
  };
};

export const initGroceryItems = () => {
  return dispatch => {
    axios
      .get("/groceryItems.json")
      .then(response => {
        dispatch(setGroceryItems(response.data));
      })
      .catch(error => {
        dispatch(fetchGroceryItemsFail());
      });
  };
};
