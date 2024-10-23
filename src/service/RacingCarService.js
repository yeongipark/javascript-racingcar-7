import { getCars } from '../util/util.js';
import Validator from '../Validator.js';
import { CarModel } from '../model/CarModel.js';

export default class RacingCarService {
  constructor() {
    this.cars = [];
  }

  saveCars(carsString) {
    const cars = getCars(carsString);
    Validator.validateCarNumber(cars);
    cars.forEach((car) => {
      this.cars.push(new CarModel(car));
    });
  }

  processCarMovement() {
    let movementResult = [];
    this.cars.forEach((car) => {
      car.advanceOnRandom();
      movementResult.push({
        name: car.getName(),
        advancedCount: car.getAdvancedCount(),
      });
    });
    return movementResult;
  }

  getWinners() {
    const maxAdvancedCount = Math.max(
      ...this.cars.map((car) => car.getAdvancedCount()),
    );

    return this.cars
      .filter((car) => car.getAdvancedCount() === maxAdvancedCount)
      .map((car) => car.getName());
  }
}
