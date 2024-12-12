class PurchaseService {
  order;
  promotion;

  constructor(order, promotion) {
    this.order = order;
    this.promotion = promotion;
  }

  getResultPrice() {
    return this.order.getTotalPrice() - this.promotion.getDiscountPrice();
  }
}

export default PurchaseService;
