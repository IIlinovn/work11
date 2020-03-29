import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  product: Product

  constructor(
    public productsService: ProductsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.productsService
      .getById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(res => this.product = res);
  }

  update() {
    this.productsService.update(this.product).subscribe()
  }

}
