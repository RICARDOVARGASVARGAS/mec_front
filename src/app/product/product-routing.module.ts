import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { checkGuard } from '../guards/check.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: ProductIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['product.index'],
    },
  },
  {
    path: 'create',
    component: ProductCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['product.create'],
    },
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['product.edit'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
