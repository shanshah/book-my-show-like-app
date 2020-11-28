import React from 'react';

import '../styles/theater-card.css'

const TheatersCard = (props) => {
  const { theater, handleClick } = props;
  return (
    <div className="theater-card" onClick={handleClick}>
      <div className="theater-name">{theater.name}</div>
      <div className="theater-address">{theater.address}</div>
      <div className="theater-phone">{theater.phone}</div>
    </div>
  );
};

export default TheatersCard;