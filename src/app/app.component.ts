import { Component, DoCheck } from '@angular/core';

import { ProductService } from './product.service';
import { PromoCodeService } from './promo-code.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements DoCheck {
  products;
  numberItems: number = 0;
  subTotal: number = 0;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent: number = 10;
  tax: number = 0;

  constructor(
    private productService: ProductService,
    private promoCodeService: PromoCodeService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  ngDoCheck() {
    this.numberItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }

    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
  }

  handleUpdateQuantity(product: { id: number; quantity: number }) {
    this.productService.updateQuantity(product.id, product.quantity);
  }

  handleRemoveProduct(id: number) {
    this.productService.removeProduct(id);
  }

  handleApplyPromoCode(code: string) {
    this.discountPercent = this.promoCodeService.applyPromoCode(code);
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if (this.discount > 0) {
      alert(`The promotional code was applied.`);
    } else {
      alert(
        'Sorry, the promotional code you entered is not valid! Try code "AUTUMN" (discount 10% to all cart items) or "WINTER" (discount 20% to all cart items).'
      );
    }
  }
}
