import { AppPage } from "./app.po";
import { browser, logging } from "protractor";

describe("User using shopping cart", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display correct total items", () => {
    page.navigateTo();

    expect(page.getTotalItems()).toEqual(page.getTotalItemsText());
  });

  it("should not allow input non-numeric quantity", () => {
    page.navigateTo();

    page.changeQuantity(1, "abc");

    expect(page.getQuantity(1)).not.toEqual("abc");
  });

  it("should display correct total items when user change product quantity", () => {
    page.navigateTo();

    page.changeQuantity(0, "3");
    page.changeQuantity(1, "4");

    expect(page.getTotalItems()).toEqual(page.getTotalItemsText());
  });

  it("should remove product when user click remove button", async () => {
    page.navigateTo();

    const oldNumberProducts = await page.getNumberProducts();

    page.removeProduct(0);

    expect(page.getNumberProducts()).toEqual(oldNumberProducts - 1);
  });

  it("should display correct total items when user remove product", () => {
    page.navigateTo();

    page.removeProduct(0);

    expect(page.getTotalItems()).toEqual(page.getTotalItemsText());
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
