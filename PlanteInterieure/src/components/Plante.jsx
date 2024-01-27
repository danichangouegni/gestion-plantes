import React from 'react';
import Timer from './Timer';
import WaterDeleteButtons from './WaterDeleteButtons';
import PropTypes from 'prop-types';
import PlanteModel from '../models/PlanteModel';
import styles from '../styles/App.css';
import Moment from 'moment';

function Plante(props) {

  var highlightStyle = {
    padding: '5px 15px',
    borderRadius: '3px'
  };
  var now = new Moment();
  var lastWatering = new Moment(props.childPlante.lastWatering);
  var whenToWater = lastWatering.add(props.childPlante.wateringInterval - .5, 'hours');
  if (now.isAfter(whenToWater)) {
    highlightStyle.backgroundColor = 'tomato';
  }

  return (
    <div style={highlightStyle}>
      <div className={styles.plante}>
        <p>{props.childPlante.name}</p>
        <Timer
          wateringInterval={props.childPlante.wateringInterval}
          nextWatering={props.childPlante.nextWatering} />
        <WaterDeleteButtons
          waterPlante={props.waterPlante}
          childPlante={props.childPlante}
          deletePlante={props.deletePlante} />
      </div>
    </div>
  );
}

Plante.propTypes = {
  childPlante: PropTypes.instanceOf(PlanteModel).isRequired,
  waterPlante: PropTypes.func.isRequired,
  deletePlante: PropTypes.func.isRequired,
};

export default Plante;
