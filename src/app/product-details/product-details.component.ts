import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Shipping } from '../models/shipping';
import { ShippingService } from '../services/shipping.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  products!: Product[]
  shippingPrice!: Shipping[]
  constructor(
    private productService: ProductService,
     private route: ActivatedRoute,
     private cartService: CartService,
     private shippingService: ShippingService
     ) {

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const currentRoute = Number(routeParams.get('id'));
 
    this.productService.getProducts().subscribe(products => {
      products.forEach(product => {
        if (product.id === currentRoute) {
          this.products  = [product];
        }
      });

      
    });

     this.shippingService.productShipping().subscribe(res => this.shippingPrice = res

     )
  }
  addToCart(product: Product) {
      this.cartService.addProductToCart(product)
      alert("Product has been added to the cart")
      
  }
}