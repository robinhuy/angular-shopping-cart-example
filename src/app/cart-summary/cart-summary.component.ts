import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html'
})
export class CartSummaryComponent {
  @Input() subTotal: number;
  @Input() tax: number;
  @Input() discount: number;
}
