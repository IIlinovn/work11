import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  product: Product = null

  constructor(
    public productsService: ProductsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.productsService
      .getById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(res => this.product = res);
  }

}
