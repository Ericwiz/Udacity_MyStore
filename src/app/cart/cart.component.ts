import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

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

  // Validate fullName
  fullNameError!:string | null
  // validate fullname method
  checkUsername() {
    if (!this.fullName || this.fullName.length < 6) {
      this.fullNameError = "Username must be at least 6 characters";
    }
     else {
      this.fullNameError = null;
    }
  }

  // validate email
  emailError!: string | null;

  // validate email method
  validateEmail() {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const valid = emailRegex.test(this.email);
    this.emailError = valid ? null : "Invalid email address";
  }

  // validate address
  addressError!: string | null
  validateAddress() {
    if (!this.address  || this.address.length < 6) {
      this.addressError = "Address should be at least 6 characters";
    }
     else {
      this.addressError = null;
    }
  }

  // validateShippingtype
  shippingError!:string | null
  validateShipping() {
    if (!this.shippingType || this.shippingType.length < 5) {
      this.shippingError = "shipping type must be at least 5 characters";
    }
     else {
      this.shippingError = null;
    }
  }

  @Output() cart = new EventEmitter()

  delete = faDeleteLeft

  

  constructor(private cartService: CartService, private productService: ProductService){}
  products = this.cartService.getProducts()

  cartProduct!: Product
  totalPrice = 0;
  
  ngOnInit(): void {
     this.totalPrice = this.cartService.getProducts().map(product => product.price).reduce((acc, value) => acc + (value), 0)
      
  }

  removeProductFromCart(product: Product) {
    alert('Product will be removed from the cart!')
    this.cart.emit(this.cartService.removeProductFromCart(product));
   this.totalPrice = this.cartService.getProducts().map(product => product.price).reduce((acc, value) => acc - value, 0)
    
  }
}
