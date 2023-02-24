import { Component, OnInit, Input } from '@angular/core';
import { ShippingService } from '../services/shipping.service';
import { Shipping } from '../models/shipping';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit{
@Input() shipping!: Shipping
  constructor() {}

 ngOnInit(): void {
  // this.shipping = this.shippingService.productShipping()
 }
}
