import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBlank() {
    Console.print('');
  },

  printWelcome() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printAllPromotion(day, purchaseService) {
    this.printTitle(day);
    this.printMenu(purchaseService.order);
    this.printBeforeDiscountPrice(purchaseService.order);
    this.printGiveStuff(purchaseService.promotion);
    this.printPromotion(purchaseService.promotion);
    this.printTotalPromotionPrice(purchaseService.promotion);
    this.printResultPrice(purchaseService.getResultPrice());
    this.printBadge(purchaseService.promotion);
  },

  printTitle(day) {
    Console.print(`12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
    this.printBlank();
  },

  printMenu(order) {
    Console.print('<주문 메뉴>');
    order.dishes.forEach((dish) => Console.print(dish.getDishString()));
    this.printBlank();
  },

  printBeforeDiscountPrice(order) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${order.getTotalPrice().toLocaleString()}원`);
    this.printBlank();
  },

  printGiveStuff(promotion) {
    Console.print('<증정 메뉴>');
    Console.print(`샴페인 ${promotion.promotionPrice.give / 25000}개`);
    this.printBlank();
  },

  printPromotion(promotion) {
    Console.print('<혜택 내역>');
    Console.print(
      `크리스마스 디데이 할인: -${promotion.promotionPrice.christmas.toLocaleString()}원`
    );
    Console.print(`평일 할인: -${promotion.promotionPrice.day.toLocaleString()}원`);
    Console.print(`특별 할인: -${promotion.promotionPrice.special.toLocaleString()}원`);
    Console.print(`증정 이벤트: -${promotion.promotionPrice.give.toLocaleString()}원`);
    this.printBlank();
  },

  printTotalPromotionPrice(promotion) {
    Console.print('<총 혜택 금액>');
    Console.print(`-${promotion.getTotalPrice().toLocaleString()}원`);
    this.printBlank();
  },

  printResultPrice(resultPrice) {
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${resultPrice.toLocaleString()}원`);
    this.printBlank();
  },

  printBadge(promotion) {
    Console.print('<12월 이벤트 배지>');
    Console.print(`${promotion.getBadge()}`);
    this.printBlank();
  },
};

export default OutputView;
