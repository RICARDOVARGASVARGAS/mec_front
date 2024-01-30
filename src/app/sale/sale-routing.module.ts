import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkGuard } from '../guards/check.guard';
import { SaleCreateComponent } from './sale-create/sale-create.component';
import { SaleIndexComponent } from './sale-index/sale-index.component';
import { SaleEditComponent } from './sale-edit/sale-edit.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { SaleMessageComponent } from './sale-message/sale-message.component';

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

  {
    path: 'detail/:id',
    component: SaleDetailComponent,
    canActivate: [checkGuard],
    data: {
      access: ['sale.detail'],
    },
  },

  {
    path: 'message/:id',
    component: SaleMessageComponent,
    canActivate: [checkGuard],
    data: {
      access: ['sale.message'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
