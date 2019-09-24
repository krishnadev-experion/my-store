import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddProductComponent } from './add-product/add-product.component';



const routes: Routes = [{
  path : '',
  component : ProductListComponentComponent
},
{
  path : 'product-details',
  component : ProductDetailsComponent
},
{
  path : 'checkout',
  component : CheckoutComponent
},
{
  path : 'product-details/:productId',
  component : ProductDetailsComponent
},
{
  path : 'add-product',
  component : AddProductComponent
},
{
  path : '**', // wild card
  redirectTo : ''
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
