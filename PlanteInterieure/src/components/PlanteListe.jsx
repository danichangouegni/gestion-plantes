import React from 'react';
import Plante from './Plante';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';
import Moment from 'moment';

function PlanteList(props) {
  var toDisplay = props.childPlanteList.slice();
  toDisplay.sort((a,b) => {
    var first = new Moment(a.lastWatering);
    var second = new Moment(b.lastWatering);
    if (first.isBefore(second)) {
      return -1;
    } else if (first.isAfter(second)) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div className={styles.planteList}>
      {toDisplay.map((plante, index) =>
        <Plante childPlante={plante}
          key={index}
          waterPlante={props.waterPlante}
          deletePlante={props.deletePlante} />
      )}
    </div>
  );
}

PlanteList.propTypes = {
  childPlanteList: PropTypes.array.isRequired,
  waterPlante: PropTypes.func.isRequired,
  deletePlante: PropTypes.func.isRequired,
};

export default PlanteList;
