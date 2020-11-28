import { combineReducers } from 'redux';
import LandingPageReducer from './features/landing-page/redux/LandingPageReducer';
import TheatersPageReducer from './features/theaters-page/redux/TheatersPageReducer';

export default combineReducers({
  landingPage: LandingPageReducer,
  theatersPage: TheatersPageReducer,
});