import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentOption: string = 'creditCard';
  product: string = '';

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    // this.product = this.localStorageService.getData('productKey')?? '';
    this.controlContainer.control?.valueChanges?.pipe(debounceTime(200)).subscribe((value) => {
      if (this.product !== value.product) {
        this.product = value.product;
      }
    });
  }
}
