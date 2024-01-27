import React from 'react';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';
import PlanteModel from '../models/PlanteModel';

class WaterDeleteButtons extends React.Component {
  constructor(props) {
    super(props);

    this.handleWaterPlanteClicked = this.handleWaterPlanteClicked.bind(this);
    this.handleDeletePlanteClicked = this.handleDeletePlanteClicked.bind(this);
  }

  handleWaterPlanteClicked() {
    this.props.waterPlante(this.props.childPlante);
  }

  handleDeletePlanteClicked() {
    this.props.deletePlante(this.props.childPlante);
  }

  render() {
    return (
      <div className={styles.waterDeleteButtons}>
        <button onClick={this.handleWaterPlanteClicked}>Eau</button>
        <button onClick={this.handleDeletePlanteClicked}
          className={styles.deleteButton}>Delete</button>
      </div>
    );
  }
}

WaterDeleteButtons.propTypes = {
  waterPlante: PropTypes.func.isRequired,
  childPlante: PropTypes.instanceOf(PlanteModel).isRequired,
  deletePlante: PropTypes.func.isRequired,
};

export default WaterDeleteButtons;
