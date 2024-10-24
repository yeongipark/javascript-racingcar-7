import {
  checkCarNameLength,
  checkConflictingCarName,
  checkEmptyString,
  checkIntegerTryNumber,
  checkMaxCarNumber,
  checkMaxTryNumber,
  checkMinCarNumber,
  checkMinTryNumber,
} from './util/validationUtil.js';

export default class Validator {
  static validateUserInput(input) {
    checkEmptyString(input);
  }

  static validateCarName(cars) {
    checkConflictingCarName(cars);
    checkCarNameLength(cars);
  }

  static validateCarNumber(cars) {
    checkMaxCarNumber(cars);
    checkMinCarNumber(cars);
  }

  static validateTryNumber(tryNumber) {
    checkIntegerTryNumber(tryNumber);
    checkMinTryNumber(tryNumber);
    checkMaxTryNumber(tryNumber);
  }
}
