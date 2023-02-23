import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = []
  constructor(private productService: ProductService, private cartService: CartService){}

  ngOnInit(): void {
     this.productService.getProducts().subscribe(res => {
      this.products = res
    })
  }

  addToCart(product: Product) {
    this.cartService.addProductToCart(product);
    alert("product have been added to the cart!")
  }
}
