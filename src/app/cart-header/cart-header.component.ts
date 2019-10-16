import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html'
})
export class CartHeaderComponent {
  @Input() numberItems: number;
}
