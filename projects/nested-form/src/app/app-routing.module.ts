import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShipmentFormComponent } from './shipment-form/shipment-form.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: 'shipping',
    component: ShipmentFormComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: "",
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
