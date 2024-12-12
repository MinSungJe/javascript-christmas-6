import PurchaseController from './Controller/PurchaseController.js';

class App {
  async run() {
    const purchaseController = new PurchaseController();
    await purchaseController.run();
  }
}

export default App;
