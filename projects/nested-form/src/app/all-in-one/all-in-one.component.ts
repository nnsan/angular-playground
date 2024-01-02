import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.scss']
})
export class AllInOneComponent {

  constructor(private controlContainer: ControlContainer) {}


  onSubmit() {
    console.log(this.controlContainer);
  }
}
