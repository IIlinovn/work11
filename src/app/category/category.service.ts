import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../products.service';

export type Category = {
  id: number;
  title: string;
  anons?: string;
  desc?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll() {
    return this.http.get<Category[]>(baseUrl + '/products/categories')
  }

  getById(id: number) {
    return this.http.get<Category>(baseUrl + '/products/categories/' + id)
  }

  create(category: Category) {
    return this.http.post(baseUrl + '/products/categories', category)
  }

  update(category: Category) {
    return this.http.put(baseUrl + '/products/categories', category, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    })
  }

  remove(id: number) {
      return this.http.delete(baseUrl + '/products/categories/' + id)
    }
}
