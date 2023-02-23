import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipping } from '../models/shipping';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  shipping!: Shipping[]
  constructor(private http: HttpClient) { }

  productShipping() {
    return this.http.get<Shipping[]>('./assets/shipping.json')
    
  }
}
