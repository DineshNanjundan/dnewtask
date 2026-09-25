class InventoryPage {
  constructor(page) {
    this.page = page;
    this.resultcards = '[class="inventory_item"]'; // Fixed: changed comma to semicolon
    this.addtocartButton = 'button.btn_inventory'; // Fixed: made it a valid string selector and generic
  }

  async addingProducttocart(pro) {
    for (let product of pro) {
      await this.page
        .locator(this.resultcards, { hasText: product })//-> ths is a filter option in Playwright{hasText:product}
        .locator(this.addtocartButton)
        .click();
    }
  }
}

export default InventoryPage;