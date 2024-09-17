// store.js
import { createStore } from 'redux';

// Action types
const TOGGLE_THEME = 'TOGGLE_THEME';

// Action creators
export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

// Reducer
const initialState = {
  isDarkTheme: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(themeReducer);

export default store;
