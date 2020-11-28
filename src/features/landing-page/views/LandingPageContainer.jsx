import React from 'react';

import Routes from '../../../Routes';
import Movies from './Movies';
import '../styles/landing-page-styles.css';

class LandingPageContainer extends React.Component {
  
  handleMovieCardClick = () =>{
    this.props.history.push('/theaters');
  };
  
  render() {
    console.log('inside landing', this.props);
    return (
      <div className="landing-page-container">
        <div>
          <h1>Movies</h1>
        </div>
        <div>
          <Movies handleMovieCardClick={this.handleMovieCardClick} />
        </div>
      </div>
    );
  }
}

export default LandingPageContainer;