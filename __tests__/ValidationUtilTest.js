import { ERROR } from '../constant';
import {
  checkEmptyString,
  checkMinCarNumber,
  checkMaxCarNumber,
  checkMinTryNumber,
  checkMaxTryNumber,
  checkCarNameLength,
} from '../src/util/validationUtil';

describe('validateUtil 함수 테스트', () => {
  test('빈 문자열 입력시 예외 처리', () => {
    const emptyInput = '';
    const whitespaceInput = '   ';
    expect(() => checkEmptyString(emptyInput)).toThrow(ERROR.EMPTY_STRING);
    expect(() => checkEmptyString(whitespaceInput)).toThrow(ERROR.EMPTY_STRING);
  });

  test('자동차 이름을 1개 이하로 입력시 예외 처리', () => {
    const input = ['pobi'];

    expect(() => checkMinCarNumber(input)).toThrow(ERROR.MIN_CAR_NUMBER);
  });

  test('자동차 이름 21개 이상 입력시 예외 처리', () => {
    const input = Array(21).fill('carName');

    expect(() => checkMaxCarNumber(input)).toThrow(ERROR.MAX_CAR_NUMBER);
  });

  test('시도 횟수 1이하인 경우 예외 처리', () => {
    const negativeInput = '-1';
    const zeroInput = '0';

    expect(() => checkMinTryNumber(negativeInput)).toThrow(
      ERROR.MIN_TRY_NUMBER,
    );
    expect(() => checkMinTryNumber(zeroInput)).toThrow(ERROR.MIN_TRY_NUMBER);
  });

  test(`시도 횟수 10001번 이상인 경우 예외 처리`, () => {
    const failInput = '10001';
    const trueInput = '10000';

    expect(() => checkMaxTryNumber(trueInput)).not.toThrow();
    expect(() => checkMaxTryNumber(failInput)).toThrow(ERROR.MAX_TRY_NUMBER);
  });

  test('지동차 이름이 6글자 이상인 경우 예외 처리', () => {
    const cars = ['pobipobi', 'yeongi'];

    expect(() => checkCarNameLength(cars)).toThrow(ERROR.CAR_NAME_LENGTH);
  });
});
