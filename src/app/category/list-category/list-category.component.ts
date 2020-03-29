import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from 'src/app/products.service';

@Component({
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
  ) { }

  categories: Category[] = []

  ngOnInit() {
    this.categoryService
      .getAll()
      .subscribe(res => this.categories = res);
  }
}
