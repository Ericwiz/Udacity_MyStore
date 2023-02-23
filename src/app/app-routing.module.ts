import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SuccessfulPageComponent } from './successful-page/successful-page.component';
const routes: Routes = [
  {path: "", component: ProductListComponent},
  {path: "product/:id", component: ProductDetailsComponent},
  {path: "cart", component: CartComponent},
  {path: "shipping", component: ShippingComponent},
  {path: 'success', component: SuccessfulPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
