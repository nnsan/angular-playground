import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import { Router } from '@angular/router';

type Product = {
  id: number,
  name: string
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];
  selectedProduct!: number;

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.selectedProduct = 1;
  }

  public productTrackBy(idx: number, item: Product) {
    return item.id;
  }

  public onSubmit() {
    this.localStorage.saveData('productKey', `${this.selectedProduct}`);
    this.router.navigate(['shipping'])
  }

  private loadProducts() {
    this.products = [
      {id: 1, name: 'Motorbike'},
      {id: 2, name: 'Car'}
    ]
  }
}
