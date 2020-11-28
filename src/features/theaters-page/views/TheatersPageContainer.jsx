import React from 'react';
import Actions from "../../theaters-page/redux/TheatersPagePageActions";
import {connect} from "react-redux";
import TheaterCard from './TheaterCard';

class TheatersPageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTheaters();
  }
  
  handleTheaterCardClick = () => {
    this.props.history.push('/time-selection');
  };
  
  getTheaters = (theaters) =>
    theaters.map((theater) => (
      <TheaterCard
        key={theater.id}
        theater={theater}
        handleClick={this.handleTheaterCardClick}
      />
    ));
  
  render() {
    const { theaters } = this.props;
    if (theaters.length) {
      return (
        <div>
          <div>
            <h1>Cinema Theaters</h1>
          </div>
          {this.getTheaters(theaters)}
        </div>
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
  theaters: state.theatersPage.theaters,
});

const mapDispatchToProps = dispatch => ({
  fetchTheaters: () => {
    dispatch(Actions.fetchTheaters());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TheatersPageContainer);