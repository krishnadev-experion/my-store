
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/' ;
  constructor(
    private httpClient: HttpClient
  ) {

  }
  getProducts() {
    return this.httpClient.get(`${this.baseUrl}product`);
  }
  getProduct(productId) {
    return this.httpClient.get(`${this.baseUrl}product/${productId}`);
  }
  }
