import React from 'react';
import PropTypes from 'prop-types';

function Timer(props) {
  return (
    <div>
      <span style={{display: 'block'}}>Interval Arrosage: {props.wateringInterval} Heures</span>
      <span>Doit être arrosé{props.nextWatering}</span>
    </div>
  );
}

Timer.propTypes = {
  wateringInterval: PropTypes.number.isRequired,
  nextWatering: PropTypes.string.isRequired,
};

export default Timer;
