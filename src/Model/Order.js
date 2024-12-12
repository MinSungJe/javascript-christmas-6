import ErrorMessage from '../Constant/ErrorMessage.js';
import MENU_INFO from '../Constant/MenuInfo.js';
import { ListChecker, NumberChecker } from '../Service/Checkers.js';
import { getAllDishInfoFromMenuInfo } from '../Util/parseMenuInfo.js';
import throwError from '../Util/throwError.js';
import Dish from './Dish.js';

class Order {
  dishes;

  constructor(menuInput) {
    const orderList = menuInput.split(',');
    this.dishes = orderList.map((orderString) => new Dish(orderString));
    this.#validate();
  }

  #validate() {
    if (!NumberChecker.isLessthanMax(this.#getTotalAmount(), 20))
      throwError('너무 많은 메뉴를 주문했습니다.');
    if (!ListChecker.isNoRepeatValue(this.#getTotalNameList()))
      throwError(ErrorMessage.INVALID_INPUT);
    if (!ListChecker.isNoRepeatValue(this.#getTotalNameList()))
      throwError(ErrorMessage.INVALID_INPUT);
    if (ListChecker.isOnlyOneValue(this.#getTotalTypeList(), 'drink'))
      throwError('음료만 주문할 수 없습니다.');
  }

  #getTotalAmount() {
    return this.dishes.reduce((total, dish) => {
      return total + dish.amount;
    }, 0);
  }

  #getTotalNameList() {
    return this.dishes.map((dish) => dish.name);
  }

  #getTotalTypeList() {
    return this.dishes.map((dish) => dish.type);
  }

  getTypeAmount(type) {
    return this.dishes.reduce((total, dish) => {
      if (dish.type === type) return total + dish.amount;
      return total;
    }, 0);
  }

  getTotalPrice() {
    let result = 0;
    let dishNameList = [];
    this.dishes.forEach((dish) => {
      for (let i = 0; i < dish.amount; i++) dishNameList = [...dishNameList, dish.name];
    });

    dishNameList.forEach((dishName) => {
      result += getAllDishInfoFromMenuInfo(MENU_INFO).find((info) => info.name === dishName).price;
    });

    return result;
  }
}

export default Order;
