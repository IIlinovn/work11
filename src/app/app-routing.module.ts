import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { CategoryModule } from './category/category.module';


const routes: Routes = [
  { path: '', component: ListItemsComponent },
  { path: 'view/:id', component: ViewItemComponent },
  { path: 'edit/:id', component: EditItemComponent },
  { path: 'category', loadChildren: () => CategoryModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
