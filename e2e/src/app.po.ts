import { browser, by, element } from "protractor";
import { protractor } from "protractor/built/ptor";

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  async getTotalItems(): Promise<string> {
    return element.all(by.css('[type="number"]')).then(async (items) => {
      let total = 0;

      for (let item of items) {
        const value = await item.getAttribute("value");
        total += parseInt(value);
      }

      return total + " items in the bag";
    });
  }

  async getTotalItemsText(): Promise<string> {
    return element(by.css("span.count")).getText();
  }

  async changeQuantity(index: number, value: string) {
    element
      .all(by.css("input.quantity"))
      .get(index)
      .sendKeys(protractor.Key.BACK_SPACE + value);
  }

  async getQuantity(index: number): Promise<string> {
    return element
      .all(by.css("input.quantity"))
      .get(index)
      .getAttribute("value");
  }

  async removeProduct(index: number) {
    element.all(by.css(".remove > svg")).get(index).click();
  }

  async getNumberProducts(): Promise<number> {
    return element.all(by.css("ul.products > li")).count();
  }
}
