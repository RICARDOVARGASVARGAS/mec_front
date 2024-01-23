import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceIndexComponent } from './service-index/service-index.component';
import { ServiceCreateComponent } from './service-create/service-create.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';
import { checkGuard } from '../guards/check.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: ServiceIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['service.index'],
    },
  },
  {
    path: 'create',
    component: ServiceCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['service.create'],
    },
  },
  {
    path: 'edit/:id',
    component: ServiceEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['service.edit'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
