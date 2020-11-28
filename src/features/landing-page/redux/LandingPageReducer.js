import ActionTypes from './LandingPageActionTypes';

const initialState = {
  movies: null,
};

const LandingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default LandingPageReducer;