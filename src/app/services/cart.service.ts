import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []

  constructor() { }

  addProductToCart(product: Product) {
    if (!this.items.some(p => p.id === product.id)) {
      this.items.push(product);
    }
    
  }

  getProducts() {
    return this.items
  }

  clearCart() {
    this.items = []
    return this.items;
  }
  removeProductFromCart(product: Product) {
    const index = this.items.indexOf(product);
    if(index > -1) {
      this.items.splice(index, 1);
    }
  }
}
