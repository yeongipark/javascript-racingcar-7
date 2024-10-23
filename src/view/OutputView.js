import { Console } from '@woowacourse/mission-utils';
import { DASH, OUTPUT } from '../../constant.js';

export class OutputView {
  printAdvancedResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${DASH.repeat(car.advancedCount)}`);
    });
  }

  printEmptyLine() {
    Console.print('');
  }

  printString(string) {
    Console.print(string);
  }

  printWinners(winners) {
    Console.print(`${OUTPUT.WINNERS}${winners.join(', ')}`);
  }
}
