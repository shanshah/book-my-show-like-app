import React from 'react';
import { connect } from 'react-redux'

import Actions from '../redux/LandingPageActions';
import MovieCard from './MovieCard';

class Movies extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  
  render() {
    const { movies } = this.props;
    if (movies !== null) {
      return (
        <MovieCard
          movies={movies.Search}
          handleMovieCardClick={this.props.handleMovieCardClick}
        />
      );
    }
    return (
      <div>
        <h2>Please wait.....</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.landingPage.movies,
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => {
    dispatch(Actions.fetchMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);