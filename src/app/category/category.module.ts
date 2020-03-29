import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { FormsModule } from '@angular/forms';
import { CreateCategoryComponent } from './create-category/create-category.component';


@NgModule({
  declarations: [ListCategoryComponent, ViewCategoryComponent, EditCategoryComponent, CreateCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ]
})
export class CategoryModule { }
