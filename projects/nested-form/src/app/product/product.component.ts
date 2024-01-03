import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

type Product = {
  id: number,
  name: string
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];
  selectedProduct!: number;

  constructor() {}

  ngOnInit(): void {
    this.loadProducts();
    this.selectedProduct = 1;
  }

  public productTrackBy(idx: number, item: Product) {
    return item.id;
  }

  private loadProducts() {
    this.products = [
      {id: 1, name: 'Motorbike'},
      {id: 2, name: 'Car'}
    ]
  }
}
