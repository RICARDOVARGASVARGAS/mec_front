import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkGuard } from '../guards/check.guard';
import { SaleCreateComponent } from './sale-create/sale-create.component';
import { SaleIndexComponent } from './sale-index/sale-index.component';
import { SaleEditComponent } from './sale-edit/sale-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: SaleIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['sale.index'],
    },
  },
  {
    path: 'create',
    component: SaleCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['sale.create'],
    },
  },
  {
    path: 'edit/:id',
    component: SaleEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['sale.edit'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
