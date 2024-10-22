import { Random } from '@woowacourse/mission-utils';
import { isAdvancePossible, getCars } from '../src/util/util';

describe('util 함수 테스트', () => {
  test('0~9의 랜덤한 숫자에서 4이상이 나오면 true 아니면 false', () => {
    Random.pickNumberInRange = jest.fn();

    Random.pickNumberInRange.mockReturnValue(4);
    expect(isAdvancePossible()).toEqual(true);

    Random.pickNumberInRange.mockReturnValue(3);
    expect(isAdvancePossible()).toEqual(false);
  });

  test('자동차 이름 문자열을 자동차 배열로 반환', () => {
    const standardInput = 'pobi,woni,yeongi';
    const whitespaceInput = 'pobi,  woni,     yeongi';
    const noStandardInput = 'pobi,woni,yeongi,';
    const standardOuput = ['pobi', 'woni', 'yeongi'];

    expect(getCars(standardInput)).toEqual(standardOuput);

    expect(getCars(whitespaceInput)).toEqual(standardOuput);

    expect(getCars(noStandardInput)).toEqual(standardOuput);
  });
});
