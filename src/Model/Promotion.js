import { SPECIAL_DAY, WEEKEND_DAY } from '../Constant/DayInfo.js';
import { ListChecker, NumberChecker } from '../Service/Checkers.js';

class Promotion {
  day;
  price;
  apply = false;
  promotionPrice = {
    christmas: 0,
    day: 0,
    special: 0,
    give: 0,
  };

  constructor(day, order) {
    this.day = day;
    this.price = order.getTotalPrice();
    this.#setPromotion(order);
  }

  #setPromotion(order) {
    if (NumberChecker.isMorethanMin(this.price, 10000)) this.apply = true;
    if (!this.apply) return;
    this.#applyChristmas();
    this.#applyDay(order);
    this.#applySpecial();
    this.#applyGive();
  }

  #applyChristmas() {
    if (NumberChecker.isRangedNumber(this.day, 1, 25))
      this.promotionPrice.christmas += 900 + 100 * this.day;
  }

  #applyDay(order) {
    if (ListChecker.isIncludesValue(WEEKEND_DAY, this.day))
      this.promotionPrice.day += 2023 * order.getTypeAmount('main');
    else this.promotionPrice.day += 2023 * order.getTypeAmount('dessert');
  }

  #applySpecial() {
    if (ListChecker.isIncludesValue(SPECIAL_DAY, this.day)) this.promotionPrice.special += 1000;
  }

  #applyGive() {
    if (NumberChecker.isMorethanMin(this.price, 120_000)) this.promotionPrice.give += 25000;
  }

  getDiscountPrice() {
    return Object.keys(this.promotionPrice).reduce((acc, info) => {
      if (info === 'give') return acc;
      return acc + this.promotionPrice[info];
    }, 0);
  }

  getTotalPrice() {
    return Object.keys(this.promotionPrice).reduce((acc, info) => {
      return acc + this.promotionPrice[info];
    }, 0);
  }

  getBadge() {
    if (!this.apply) return '없음';
    if (NumberChecker.isMorethanMin(this.getTotalPrice(), 20_000)) return '산타';
    if (NumberChecker.isMorethanMin(this.getTotalPrice(), 10_000)) return '트리';
    return '별';
  }
}

export default Promotion;
