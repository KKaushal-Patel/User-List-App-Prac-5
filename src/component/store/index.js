import { createStore } from "redux";

const hoverHandler = (state = { isHover: false }, action) => {
  if (action.type === "toggle") {
    return {
      isHover: !state.isHover,
    };
  } else return state;
};

const store = createStore(hoverHandler);

export default store;
