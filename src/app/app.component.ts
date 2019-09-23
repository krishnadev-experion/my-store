import { Component } from '@angular/core';
import { Product } from './models/Product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    });
  }
  title = 'myStore';
}
