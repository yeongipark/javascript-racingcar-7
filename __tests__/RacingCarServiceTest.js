import RacingCarService from '../src/service/RacingCarService.js';
import { Random } from '@woowacourse/mission-utils';

const mockRandom = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('RacingCarService 테스트', () => {
  let racingCarService;

  beforeEach(() => {
    racingCarService = new RacingCarService();
    const input = 'pobi,woni,yeongi';
    racingCarService.saveCars(input);
  });

  test('자동차 저장하기', () => {
    expect(racingCarService.cars).toHaveLength(3);
    expect(racingCarService.cars[0].getName()).toBe('pobi');
    expect(racingCarService.cars[1].getName()).toBe('woni');
    expect(racingCarService.cars[2].getName()).toBe('yeongi');
  });

  test('저장된 모든 자동차 움직임 처리하기', () => {
    const randoms = [4, 1, 9];
    mockRandom(randoms);

    const output = [
      { name: 'pobi', advancedCount: 1 },
      { name: 'woni', advancedCount: 0 },
      { name: 'yeongi', advancedCount: 1 },
    ];

    expect(racingCarService.processCarMovement()).toEqual(output);
  });

  test('우승자 가져오기 (동점인 경우)', () => {
    const randoms = [4, 1, 9];
    const output = ['pobi', 'yeongi'];

    mockRandom(randoms);

    racingCarService.processCarMovement();

    expect(racingCarService.getWinners()).toEqual(output);
  });

  test('우승자 가져오기 (우승자가 한명인 경우))', () => {
    const randoms = [6, 1, 0];
    const output = ['pobi'];

    mockRandom(randoms);

    racingCarService.processCarMovement();

    expect(racingCarService.getWinners()).toEqual(output);
  });
});
