import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/products.service';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  category: Category = {
    id: null,
    title: '',
    anons: '',
    desc: '',
  }

  ngOnInit() {
  }

  create() {
    this.categoryService.create(this.category).subscribe(() => {
      this.router.navigate(['/category'])
    })
  }

}
