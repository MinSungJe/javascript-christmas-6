import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBlank() {
    Console.print('');
  },

  printMenu() {
    Console.print('<주문 메뉴>');
    // ...
  },
};

export default OutputView;
