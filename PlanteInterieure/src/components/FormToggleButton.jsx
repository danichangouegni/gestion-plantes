import React from 'react';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';

function FormToggleButton(props) {
  return (
    <button
      className={styles.formToggleButton}
      onClick={props.toggleAddPlanteFormShowing}>Add a New Plante</button>
  );
}

FormToggleButton.propTypes = {
  toggleAddPlanteFormShowing: PropTypes.func.isRequired,
};

export default FormToggleButton;
