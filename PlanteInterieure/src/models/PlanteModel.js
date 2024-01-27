import Moment from 'moment';

class PlanteModel {

  constructor(name, wateringInterval, lastWatering) {
    this.name = name;
    this.date = date
    this.image = image
    this.wateringInterval = wateringInterval;
    this.lastWatering = lastWatering;
    this.nextWatering = 'placeholder';
  }

  updateNextWateringTime() {
    var x = new Moment(this.lastWatering);
    var y = x.add(this.wateringInterval, 'hours');
    this.nextWatering = new Moment().to(y);
  }

}

export default PlanteModel;
