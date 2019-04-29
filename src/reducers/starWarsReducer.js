import { FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE }  from "../actions";


const initialState = {
  characters: [],
  error: '',
  isFetching: false

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        characters: [...state.characters, ...action.payload]
      }
      case FETCH_CHARACTER_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
