class PurchaseController {
  order;
  promotion;

  async run() {}

  getResultPrice() {
    return this.order.getTotalPrice() - this.promotion.getTotalPrice();
  }
}
