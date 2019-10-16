import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html'
})
export class CartSummaryComponent {
  subTotal: number = 21.97;
  tax: number = 5;
}
