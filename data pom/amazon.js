import { expect } from '@playwright/test';

class AmazonPage {
  constructor(page) {
    this.page = page;
    
    this.searchBox = page.locator('input#twotabsearchtextbox');
    this.searchButton = page.locator('input#nav-search-submit-button');
    this.paginationNext = page.locator('a.s-pagination-next');
  }

  async navigateToAmazon() {
    await this.page.goto('https://www.amazon.in');
  }

  async searchForProduct(keyword) {
    await this.searchBox.fill(keyword);
    await this.searchButton.click();
  }

  async setPriceRange(low, high) {
    const currentUrl = this.page.url();
    const filteredUrl = `${currentUrl}&low-price=${low}&high-price=${high}`;
    await this.page.goto(filteredUrl);
  }

  async validateAndNavigatePages(totalPages) {
    for (let i = 1; i <= totalPages; i++) {
      const currentPageIndicator = this.page.locator('span.s-pagination-item.s-pagination-selected');
      await expect(currentPageIndicator).toHaveText(String(i));
      
      if (i < totalPages) {
        await this.paginationNext.click();
      }
    }
  }

  async returnToFirstPage() {
    const pageOneButton = this.page.locator('a.s-pagination-item', { hasText: '1' });
    await pageOneButton.click();
    await expect(this.page.locator('span.s-pagination-item.s-pagination-selected')).toHaveText('1');
  }

  async selectProductAndQuantity(productName, quantity) {
    const productLink = this.page.locator(`//h2//span[contains(text(), '${productName}')]`).first();
    
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page', { timeout: 5000 }).catch(() => null),
      productLink.click()
    ]);

    const activePage = newPage ? newPage : this.page;

    await activePage.waitForLoadState();
    await activePage.locator('select#quantity').selectOption(quantity);
    await activePage.locator('input#add-to-cart-button').click();
  }
}

export default AmazonPage;