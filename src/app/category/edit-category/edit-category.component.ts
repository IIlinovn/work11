import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  category: Category = null

  ngOnInit() {
    this.categoryService
      .getById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(res => this.category = res);
  }

  save() {
    this.categoryService.update(this.category).subscribe(() => {
      this.router.navigate(['/category'])
    })
  }

  delete() {
    this.categoryService.remove(this.category.id).subscribe(() => {
      this.router.navigate(['/category'])
    })
  }

}
