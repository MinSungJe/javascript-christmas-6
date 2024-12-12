import MENU_INFO from '../src/Constant/MenuInfo.js';
import { getAllDishesFromMenuInfo, getAllTypesFromMenuInfo } from '../src/Util/parseMenuInfo.js';

describe('parseMenuInfo 함수 테스트', () => {
  test('모든 메뉴의 종류를 얻을 수 있다.', () => {
    expect(getAllTypesFromMenuInfo(MENU_INFO)).toEqual(['appetizer', 'main', 'dessert', 'drink']);
  });

  test('모든 메뉴 정보를 얻을 수 있다.', () => {
    expect(getAllDishesFromMenuInfo(MENU_INFO)).toEqual([
      '양송이수프',
      '타파스',
      '시저샐러드',
      '티본스테이크',
      '바베큐립',
      '해산물파스타',
      '크리스마스파스타',
      '초코케이크',
      '아이스크림',
      '제로콜라',
      '레드와인',
      '샴페인',
    ]);
  });
});
