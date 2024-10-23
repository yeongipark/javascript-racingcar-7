import RacingCarService from '../src/service/RacingCarService.js';
import { Random } from '@woowacourse/mission-utils';

describe('RacingCarService 테스트', () => {
  let racingCarService;

  beforeEach(() => {
    racingCarService = new RacingCarService();
    const input = 'pobi,woni,yeongi';
    racingCarService.saveCars(input);

    Random.pickNumberInRange = jest.fn();
    Random.pickNumberInRange.mockReturnValue(4);
  });

  test('자동차 저장하기', () => {
    expect(racingCarService.cars).toHaveLength(3);
    expect(racingCarService.cars[0].getName()).toBe('pobi');
    expect(racingCarService.cars[1].getName()).toBe('woni');
    expect(racingCarService.cars[2].getName()).toBe('yeongi');
  });

  test('저장된 모든 자동차 움직임 처리하기', () => {
    const output = [
      { name: 'pobi', advancedCount: 1 },
      { name: 'woni', advancedCount: 1 },
      { name: 'yeongi', advancedCount: 1 },
    ];

    expect(racingCarService.processCarMovement()).toEqual(output);
  });

  test('우승자 가져오기 (동점인 경우)', () => {
    const output = ['pobi', 'woni', 'yeongi'];

    racingCarService.processCarMovement();

    expect(racingCarService.getWinners()).toEqual(output);
  });

  test('우승자 가져오기 (우승자가 한명인 경우))', () => {
    Random.pickNumberInRange
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(3);

    racingCarService.processCarMovement();

    const output = ['pobi'];

    expect(racingCarService.getWinners()).toEqual(output);
  });
});
