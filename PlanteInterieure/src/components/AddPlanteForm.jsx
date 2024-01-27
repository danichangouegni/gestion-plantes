import React from 'react';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';
import Moment from 'moment';
import PlanteModel from '../models/PlanteModel';

class AddPlanteForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(e) {
    e.preventDefault();

    const {_planteName, _wateringInterval, _lastWatered} = this.refs;

    var newPlante = new PlanteModel(_planteName.value, parseFloat(_wateringInterval.value), new Moment(_lastWatered.value).format());

    _planteName.value = '';
    _wateringInterval.value = '';
    _lastWatered.value = '';

    this.props.addNewPlanteToList(newPlante);
    this.props.toggleAddPlanteFormShowing();
  }

  render() {
    if (this.props.addPlanteFormShowing) {
      return (
        <form className={styles.addPlanteForm} onSubmit={this.handleFormSubmission}>
          <div className={styles.leftFormColumn}>
            <label htmlFor="planteName">Nom de la Plante:</label>
            <input type="text" placeholder="Tomato" name="planteName" ref="_planteName"/>
            <label htmlFor="planteName">Date Achat:</label>
            <input type="date" name="date" ref="_date"/>
            <label htmlFor="planteName">Image de la Plante:</label>
            <input type="text" placeholder="plante.png" name="image" ref="_image"/>
            
            <label htmlFor="wateringInterval">À quelle fréquence faut-il l’arroser (en heures) ?</label>
            <input type="number" placeholder="8" name="wateringInterval" ref="_wateringInterval" step="0.01" />
          </div>
          <div className={styles.rightFormColumn}>
            <label htmlFor="lastWatered">Quand a-t-il été arrosé pour la dernière fois ?:</label>
            <input type="datetime-local" name="lastWatered" ref="_lastWatered" />
            <button type="submit">Submit</button>
          </div>
        </form>
      );
    } else {
      return (null);
    }
  }
}

AddPlanteForm.propTypes = {
  addPlanteFormShowing: PropTypes.bool.isRequired,
  addNewPlanteToList: PropTypes.func.isRequired,
  toggleAddPlanteFormShowing: PropTypes.func.isRequired
};

export default AddPlanteForm;
