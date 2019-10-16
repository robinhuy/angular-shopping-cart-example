import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      image: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 2
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      image: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  findById(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  findIndexById(id: number): number {
    return this.products.findIndex(product => product.id === id);
  }

  updateQuantity(id: number, quantity: number) {
    const product = this.findById(id);
    if (product) {
      product.quantity = quantity || 0;
    }
  }

  removeProduct(id: number): boolean {
    const index = this.findIndexById(id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }

    return false;
  }
}
