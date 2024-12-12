import ErrorMessage from '../Constant/ErrorMessage.js';
import MENU_INFO from '../Constant/MenuInfo.js';
import { ListChecker, NumberChecker, StringChecker } from '../Service/Checkers.js';
import { getAllDishesFromMenuInfo, getAllTypesFromMenuInfo } from '../Util/parseMenuInfo.js';
import throwError from '../Util/throwError.js';

class Dish {
  name;
  amount;
  type;

  constructor(menuInput) {
    this.#validate(menuInput);
    const [name, amonut] = menuInput.split('-');
    this.name = name;
    this.amount = Number(amonut);
    this.type = this.#getMenuType(name);
  }

  #validate(menuInput) {
    if (!StringChecker.isRegString(menuInput, /.+-.+/)) throwError(ErrorMessage.INVALID_INPUT);
    const [name, amount] = menuInput.split('-');
    if (!ListChecker.isIncludesValue(getAllDishesFromMenuInfo(MENU_INFO), name))
      throwError(ErrorMessage.INVALID_INPUT);
    if (!NumberChecker.isMorethanMin(amount, 1)) throwError(ErrorMessage.INVALID_INPUT);
  }

  #getMenuType(name) {
    const allMenuTypes = getAllTypesFromMenuInfo(MENU_INFO);
    let result = '';
    allMenuTypes.forEach((type) => {
      const allDishesInType = MENU_INFO[type].map((dish) => dish.name);
      if (ListChecker.isIncludesValue(allDishesInType, name)) result = type;
    });
    return result;
  }
}

export default Dish;
