import ActionTypes from './TheatersPageActionTypes';

const initialState = {
  theaters: [],
};

const TheatersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_THEATERS:
      return {
        ...state,
        theaters: action.payload,
      };
    default:
      return state;
  }
};

export default TheatersPageReducer;