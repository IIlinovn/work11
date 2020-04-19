import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl + '/products')
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(baseUrl + '/products/' + id)
  }

  update(product: Product) {
    console.log(product)
    return this.http.put(baseUrl + '/products', product)
  }
}

export const baseUrl = "http://lesson-3.iilinov-n.myjino.ru/"

export type Product = {
  "id": number,
  "title": string, "anons": string,
  "desc": string,
  "price": number,
  "image": string,
  "category_id": number,
  "category": Category,
  "created_at": string,
  "updated_at": string
}

export type Category = {
  id: number,
  title: string,
  anons?: string,
  desc?: string,
}