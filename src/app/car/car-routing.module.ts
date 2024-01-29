import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkGuard } from '../guards/check.guard';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarIndexComponent } from './car-index/car-index.component';
import { CarHistoryComponent } from './car-history/car-history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: CarIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['car.index'],
    },
  },
  {
    path: 'create',
    component: CarCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['car.create'],
    },
  },
  {
    path: 'edit/:id',
    component: CarEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['car.edit'],
    },
  },
  {
    path: 'history/:id',
    component: CarHistoryComponent,
    canActivate: [checkGuard],
    data: {
      access: ['car.history'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
