import React from 'react';
import FormToggleButton from './FormToggleButton';
import AddPlanteForm from './AddPlanteForm';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';

function FormContainer(props) {
  return (
    <div className={styles.formContainer}>
      <FormToggleButton toggleAddPlanteFormShowing={props.toggleAddPlanteFormShowing} />
      <AddPlanteForm addPlanteFormShowing={props.addPlanteFormShowing}
        addNewPlanteToList={props.addNewPlanteToList}
        toggleAddPlanteFormShowing={props.toggleAddPlanteFormShowing} />
    </div>
  );
}

FormContainer.propTypes = {
  addPlanteFormShowing: PropTypes.bool.isRequired,
  toggleAddPlanteFormShowing: PropTypes.func.isRequired,
  addNewPlanteToList: PropTypes.func.isRequired,
};

export default FormContainer;
