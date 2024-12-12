import Order from '../src/Model/Order.js';
import Promotion from '../src/Model/Promotion.js';

describe('Promotion 클래스 테스트', () => {
  const order1 = new Order('양송이수프-2,제로콜라-1');
  const order2 = new Order('양송이수프-1,제로콜라-1');

  test.each([
    [order1, true],
    [order2, false],
  ])('총 가격에 따라 세부정보 계산 여부가 달라짐', (price, result) => {
    const promotion = new Promotion(1, price);
    expect(promotion.apply).toBe(result);
  });

  test('모든 할인을 받을 수 있다.', () => {
    const order = new Order('티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1');
    const promotion = new Promotion(3, order);
    expect(promotion.getTotalPrice()).toBe(31246);
  });

  test('10,000원 이하 구입하면 모든 할인을 받을 수 없다.', () => {
    const promotion = new Promotion(3, order2);
    expect(promotion.getTotalPrice()).toBe(0);
  });
});
