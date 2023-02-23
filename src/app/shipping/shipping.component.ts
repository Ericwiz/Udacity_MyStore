import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../services/shipping.service';
import { Shipping } from '../models/shipping';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit{
  shippingPrice!: Observable<Shipping[]>
  constructor(private shippingService: ShippingService) {}

 ngOnInit(): void {
  this.shippingPrice = this.shippingService.productShipping()
 }
}
