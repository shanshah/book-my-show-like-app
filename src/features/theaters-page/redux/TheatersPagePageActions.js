import ActionTypes from './TheatersPageActionTypes';
import theatersData from '../static/Theaters';

const TheatersPageActions = {
  setTheaters: payload => ({ type: ActionTypes.SET_THEATERS, payload }),
  fetchTheaters: payload => (dispatch) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(theatersData)
      }, 2000);
    })
      .then(data => {
        // console.log('data', data);
        dispatch(TheatersPageActions.setTheaters(data))
      })
  }
};

export default TheatersPageActions;