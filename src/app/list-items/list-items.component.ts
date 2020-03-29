import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor(
    public productsService: ProductsService,
  ) { }

  products: Product[] = []

  ngOnInit() {
    this.productsService.getAll().subscribe(res => this.products = res);
  }

}
