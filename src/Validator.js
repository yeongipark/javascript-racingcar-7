import {
  checkEmptyString,
  checkMaxCarNumber,
  checkMaxTryNumber,
  checkMinCarNumber,
  checkMinTryNumber,
} from './util/validationUtil.js';

export default class Validator {
  static validateUserInput(input) {
    checkEmptyString(input);
  }

  static validateCarNumber(cars) {
    checkMaxCarNumber(cars);
    checkMinCarNumber(cars);
  }

  static validateTryNumber(tryNumber) {
    checkMinTryNumber(tryNumber);
    checkMaxTryNumber(tryNumber);
  }
}
