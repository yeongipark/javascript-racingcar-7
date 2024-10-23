import { ERROR } from '../../constant.js';

export function checkEmptyString(input) {
  if (input.trim() === '') {
    throw new Error(ERROR.EMPTY_STRING);
  }
}

export function checkMinCarNumber(cars) {
  if (cars.length < 2) {
    throw new Error(ERROR.MIN_CAR_NUMBER);
  }
}

export function checkMaxCarNumber(cars) {
  if (cars.length > 20) {
    throw new Error(ERROR.MAX_CAR_NUMBER);
  }
}

export function checkMinTryNumber(tryNumber) {
  if (Number(tryNumber) < 1) {
    throw new Error(ERROR.MIN_TRY_NUMBER);
  }
}

export function checkMaxTryNumber(tryNumber) {
  if (Number(tryNumber) > 10000) {
    throw new Error(ERROR.MAX_TRY_NUMBER);
  }
}
