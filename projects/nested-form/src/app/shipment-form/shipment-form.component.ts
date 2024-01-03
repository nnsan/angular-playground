import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class ShipmentFormComponent {
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';

  constructor() {}
}
