import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/products.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
  ) { }

  category: Category = null

  ngOnInit() {
    this.categoryService
      .getById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(res => this.category = res);
  }

  save() {
    this.categoryService.update(this.category).subscribe()
  }

}
