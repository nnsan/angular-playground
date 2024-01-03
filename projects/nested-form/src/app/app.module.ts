import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ShipmentFormComponent } from './shipment-form/shipment-form.component';
import { PaymentComponent } from './payment/payment.component';
import { AllInOneComponent } from './all-in-one/all-in-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShipmentFormComponent,
    PaymentComponent,
    AllInOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
