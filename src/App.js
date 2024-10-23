import RacingCarController from './controller/RacingCarController.js';
import RacingCarService from './service/RacingCarService.js';
import { InputView } from './view/InputView.js';
import { OutputView } from './view/OutputView.js';

class App {
  #racingCarController;
  constructor() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const racingCarService = new RacingCarService();
    this.#racingCarController = new RacingCarController(
      racingCarService,
      inputView,
      outputView,
    );
  }

  async run() {
    await this.#racingCarController.run();
  }
}

export default App;
