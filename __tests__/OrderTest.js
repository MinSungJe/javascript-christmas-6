import Order from '../src/Model/Order.js';

describe('Order 객체 테스트', () => {
  test('메뉴 갯수가 20개를 초과했는지 확인한다.', () => {
    expect(() => {
      new Order('티본스테이크-10,양송이수프-5,크리스마스파스타-6');
    }).toThrow('[ERROR]');
  });

  test('메뉴 중 중복된 메뉴가 있는 지 확인한다.', () => {
    expect(() => {
      new Order('티본스테이크-10,티본스테이크-5');
    }).toThrow('[ERROR]');
  });

  test('음료만 주문했는지 확인한다.', () => {
    expect(() => {
      new Order('샴페인-5,제로콜라-6');
    }).toThrow('[ERROR]');
  });

  test('입력을 잘못했는지 확인한다.', () => {
    expect(() => {
      new Order('');
    }).toThrow('[ERROR]');
  });

  test('정상 주문', () => {
    expect(() => {
      new Order('티본스테이크-3,샴페인-5');
    }).not.toThrow('');
  });

  test('해당 주문의 총 가격을 알 수 있다.', () => {
    const order = new Order('양송이수프-2,제로콜라-1');
    expect(order.getTotalPrice()).toBe(15000);
  });

  test('해당 메뉴타입의 갯수를 알 수 있다.', () => {
    const order = new Order('양송이수프-2,제로콜라-1');
    expect(order.getTypeAmount('appetizer')).toBe(2);
    expect(order.getTypeAmount('drink')).toBe(1);
  });
});
