import { FETCH, SUCCESS, ERROR } from "../actions";
const initialState = {
  characters: [],
  error: null,
  isFetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        characters: action.payload
      };
    case ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
