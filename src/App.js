import PurchaseController from './Controller/PurchaseController.js';

class App {
  async run() {
    const purchaseController = new PurchaseController();
    purchaseController.run();
  }
}

export default App;
