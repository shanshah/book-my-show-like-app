import ActionTypes from './LandingPageActionTypes';

const LandingPageActions = {
  setMovies: payload => ({ type: ActionTypes.SET_MOVIES, payload }),
  fetchMovies: payload => (dispatch) => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=59980e4d&s=panther')
      .then((response) => response.json())
      .then(data => {
        dispatch(LandingPageActions.setMovies(data));
      })
      .catch(() => {
        console.log('error');
      });
  }
};

export default LandingPageActions;