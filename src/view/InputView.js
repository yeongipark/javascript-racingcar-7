import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../../constant.js';

export class InputView {
  async inputCarNames() {
    return Console.readLineAsync(INPUT.CAR_NAMES);
  }

  async inputTryNumber() {
    return Console.readLineAsync(INPUT.TRY_NUMBER);
  }
}
