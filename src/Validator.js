import {
  checkCarNameLength,
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

  static validateCarNameLength(cars) {
    checkCarNameLength(cars);
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
