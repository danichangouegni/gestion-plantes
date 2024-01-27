import React from 'react';
import styles from '../styles/App.css';
import PlanteList from './PlanteList';
import FormContainer from './FormContainer';
import PlanteModel from '../models/PlanteModel';
import Moment from 'moment';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      planteList: [
        new PlanteModel('tomato', 24, new Moment().format()),
        new PlanteModel('fern', .501, new Moment().format()),
        new PlanteModel('venus flytrap', 24, new Moment().format()),
      ],
      addPlanteFormShowing: false
    };

    this.toggleAddPlanteFormShowing = this.toggleAddPlanteFormShowing.bind(this);
    this.addNewPlanteToList = this.addNewPlanteToList.bind(this);
    this.waterPlante = this.waterPlante.bind(this);
    this.deletePlante = this.deletePlante.bind(this);
  }

  componentDidMount() {
    this.updateTimers();
    this.timerStartedChecker = setInterval(() =>
      this.updateTimers(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerStartedChecker);
  }

  toggleAddPlanteFormShowing() {
    this.setState({addPlanteFormShowing: !this.state.addPlanteFormShowing});
  }

  addNewPlanteToList(newPlante) {
    var newPlanteList = this.state.planteList.slice();
    newPlanteList.push(newPlante);
    this.setState({planteList: newPlanteList});
  }

  updateTimers() {
    var newPlanteList = this.state.planteList.slice();
    newPlanteList.forEach((plante) => {
      plante.updateNextWateringTime();
    });
    this.setState({planteList: newPlanteList});
  }

  waterPlante(wateredPlante) {
    wateredPlante.lastWatering = new Moment().format();
    var newState = this.state.planteList.slice();
    newState = newState.map((plante) => {
      if ((plante.name === wateredPlante.name) && (plante.wateringInterval === wateredPlante.wateringInterval)) {
        return wateredPlante;
      } else {
        return plante;
      }
    });
    this.setState({planteList: newState});
    this.updateTimers();
  }

  deletePlante(planteToBeDeleted) {
    var newState = this.state.planteList.slice();
    newState.forEach((plante, index) => {
      if ((plante.name === planteToBeDeleted.name) && (plante.wateringInterval === planteToBeDeleted.wateringInterval)) {
        newState.splice(index, 1);
      }
    });
    this.setState({planteList: newState});
  }

  render() {

    return (
      <div className={styles.app}>
        <h1>Da Nursery</h1>
        <FormContainer
          addPlanteFormShowing={this.state.addPlanteFormShowing}
          toggleAddPlanteFormShowing={this.toggleAddPlanteFormShowing}
          addNewPlanteToList={this.addNewPlanteToList} />
        <PlanteList childPlanteList={this.state.planteList}
          waterPlante={this.waterPlante}
          deletePlante={this.deletePlante} />
      </div>
    );
  }
}

export default App;
