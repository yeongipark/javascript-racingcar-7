import { OUTPUT } from '../../constant.js';
import Validator from '../Validator.js';

export default class RacingCarController {
  #racingCarService;
  #inputView;
  #ouputView;

  constructor(racingCarService, inputView, outputView) {
    this.#racingCarService = racingCarService;
    this.#inputView = inputView;
    this.#ouputView = outputView;
  }

  async run() {
    const carNamesString = await this.#inputView.inputCarNames();
    Validator.validateUserInput(carNamesString);
    this.#racingCarService.saveCars(carNamesString);

    const tryNumber = await this.#inputView.inputTryNumber();
    Validator.validateTryNumber(tryNumber);

    this.#ouputView.printString(OUTPUT.EXCUTION_RESULT);
    Array(tryNumber)
      .fill(0)
      .forEach(() => {
        const advancedResult = this.#racingCarService.processCarMovement();
        this.#ouputView.printAdvancedResult(advancedResult);
        this.#ouputView.printEmptyLine();
      });

    const winners = this.#racingCarService.getWinners();
    this.#ouputView.printWinners(winners);
  }
}
