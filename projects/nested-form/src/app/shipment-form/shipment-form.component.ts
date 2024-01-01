import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.scss']
})
export class ShipmentFormComponent {
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';

  constructor(private router: Router) {
  }


  onSubmit() {
    this.router.navigate(['payment']);
  }
}
