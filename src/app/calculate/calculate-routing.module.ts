import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateIndexComponent } from './calculate-index/calculate-index.component';
import { checkGuard } from '../guards/check.guard';
import { CalculateCreateComponent } from './calculate-create/calculate-create.component';
import { CalculateEditComponent } from './calculate-edit/calculate-edit.component';
import { CalculateDetailComponent } from './calculate-detail/calculate-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: CalculateIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['calculate.index'],
    },
  },
  {
    path: 'create',
    component: CalculateCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['calculate.create'],
    },
  },
  {
    path: 'edit/:id',
    component: CalculateEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['calculate.edit'],
    },
  },

  {
    path: 'detail/:id',
    component: CalculateDetailComponent,
    canActivate: [checkGuard],
    data: {
      access: ['calculate.detail'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculateRoutingModule {}
