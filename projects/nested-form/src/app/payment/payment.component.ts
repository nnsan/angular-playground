import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentOption: string = 'creditCard';
  product: string = '';

  constructor(private localStorageService: LocalStorageService) {
    
  }

  ngOnInit(): void {
    this.product = this.localStorageService.getData('productKey')?? '';
  }

  onSubmit() {
    console.log(this.paymentOption);
  }
}
