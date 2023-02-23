import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []

  constructor() { }

  addProductToCart(product: Product) {
    this.items.push(product)
  }

  getProducts() {
    return this.items
  }

  clearCart() {
    this.items = []
    return this.items;
  }
}
