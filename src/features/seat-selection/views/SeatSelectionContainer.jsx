import React from 'react';

import seatSelectionData from '../static/SeatSelectionData';
import '../styles/seat-selection-page.css';

class SeatSelectionContainer extends React.Component {
  componentDidMount() {
    this.fetchSeatData()
      .then(data => {
      this.setState({ seatData: data })
    });
  }
  state = {
    seatData: [],
    selectedSeats: 0,
  };
  
  fetchSeatData = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(seatSelectionData)
      }, 2000);
    });
  
  handleClick = () => {
    // TODO: change the color of seats when user clicks on a seat
    // TODO: and also decrease the selected value when he clicks on selected seat
    this.setState({
      selectedSeats: this.state.selectedSeats + 1,
    });
  };
  
  getCustomSeatClass = (seat) => {
    if (seat.isOccupied) {
      return 'occupied';
    }
    return 'available';
  };
  
  getSeats = () =>
    this.state.seatData.map(seat => (
      <button
        key={seat.id} className={`seat ${this.getCustomSeatClass(seat)}`}
        disabled={seat.isOccupied}
        onClick={() => { this.handleClick(seat.id) }}
      >
        {seat.number}
      </button>
    ));
  
  render() {
    if (this.state.seatData.length) {
      return (
        <div>
          <div className="seat-info-container">
            Available: <span className="seat available" />
            Occupied: <span className="seat occupied" />
            <span>Selected seats: {this.state.selectedSeats}</span>
          </div>
          <div>
            {this.getSeats()}
          </div>
          <div>
            <button className="book-seat-button">
              Book
            </button>
          </div>
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

export default SeatSelectionContainer;