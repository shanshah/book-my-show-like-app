import React from 'react';

import timeSelectionData from '../static/TimeSelectionData';
import '../styles/time-selection-page.css';

class TimeSelectionContainer extends React.Component {
  handleTimeSelection = () => {
    this.props.history.push('/seat-selection');
  };
  
  getTimeBoxList = () =>
    timeSelectionData.map(timeData => (
      <button
        key={timeData.id}
        className="time-box"
        onClick={this.handleTimeSelection}
      >
        {timeData.time}
      </button>
    ));
  
  render() {
    return (
      <div>
        <h2>Available times</h2>
        <div>December 2020</div>
        <div>
          {this.getTimeBoxList()}
        </div>
      </div>
    );
  }
}

export default TimeSelectionContainer;