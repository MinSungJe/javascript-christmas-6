import Dish from '../src/Model/Dish.js';

describe('Dish 클래스 테스트', () => {
  test.each(['테스트임', '테스트임-', '', '아무메뉴-1', '티본스테이크-0'])(
    '잘못된 값이 입력된 경우',
    (input) => {
      expect(() => {
        new Dish(input);
      }).toThrow('[ERROR]');
    }
  );

  test('정상 입력', () => {
    expect(() => {
      new Dish('티본스테이크-2');
    }).not.toThrow('[ERROR]');
  });

  test.each([
    ['name', '티본스테이크'],
    ['amount', 2],
    ['type', 'main'],
  ])('메뉴의 이름과 갯수, 타입을 알 수 있다', (type, result) => {
    const dish = new Dish('티본스테이크-2');
    expect(dish[type]).toBe(result);
  });
});
