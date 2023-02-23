import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  fullName: string = '';
  email: string = '';
  phoneNumber: number = 0
  address: string = ''
  shippingType: string = '';
  cardNumber: string = '';

  

  constructor(private cartService: CartService, private productService: ProductService){}
  products = this.cartService.getProducts()

  totalPrice = 0;
  
  ngOnInit(): void {
    
     this.totalPrice = this.cartService.getProducts().map(product => product.price).reduce((acc, value) => acc + value, 0)
      
    
  }
}
