import { ERROR } from '../constant.js';
import Validator from '../src/Validator.js';

describe('Validator 클래스 테스트', () => {
  test('자동차 이름 입력 값 검증', () => {
    const emptyInput = '';
    const whiteSpaceInput = '    ';

    expect(() => Validator.validateUserInput(emptyInput)).toThrow(
      ERROR.EMPTY_STRING,
    );

    expect(() => Validator.validateUserInput(whiteSpaceInput)).toThrow(
      ERROR.EMPTY_STRING,
    );
  });

  test('자동차 갯수 검증', () => {
    const minInput = ['pobi'];
    const maxInput = Array(21).fill('carName');

    expect(() => Validator.validateCarNumber(minInput)).toThrow(
      ERROR.MIN_CAR_NUMBER,
    );

    expect(() => Validator.validateCarNumber(maxInput)).toThrow(
      ERROR.MAX_CAR_NUMBER,
    );
  });

  test('시도 횟수 검증', () => {
    const minTryNumber = 0;
    const maxTryNumber = 10001;

    expect(() => Validator.validateTryNumber(minTryNumber)).toThrow(
      ERROR.MIN_TRY_NUMBER,
    );

    expect(() => Validator.validateTryNumber(maxTryNumber)).toThrow(
      ERROR.MAX_TRY_NUMBER,
    );
  });
});