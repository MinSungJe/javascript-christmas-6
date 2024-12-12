import Order from '../Model/Order.js';
import Promotion from '../Model/Promotion.js';
import PurchaseService from '../Service/PurchaseService.js';
import loopWhileValid from '../Util/loopWhileValid.js';
import validateDateInput from '../Util/validateDate.js';
import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';

class PurchaseController {
  async run() {
    OutputView.printWelcome();
    const day = await loopWhileValid(this.getDay);
    const purchaseService = await loopWhileValid(this.getPurchaseService, day);
    OutputView.printAllPromotion(day, purchaseService);
  }

  async getDay() {
    const dateInput = await InputView.readDate();
    validateDateInput(dateInput);
    return Number(dateInput);
  }

  async getPurchaseService(day) {
    const orderInput = await InputView.readOrder();
    const order = new Order(orderInput);
    return new PurchaseService(order, new Promotion(day, order));
  }
}

export default PurchaseController;
