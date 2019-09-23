
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private httpClient: HttpClient
  ) {

  }
  getProducts() {
    return this.httpClient.get('http://localhost:3000/product');
  }
}
