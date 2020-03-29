import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';


const routes: Routes = [
  {  path: '', component: ListCategoryComponent },
  {  path: ':id', component: ViewCategoryComponent },
  {  path: 'edit/:id', component: EditCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
