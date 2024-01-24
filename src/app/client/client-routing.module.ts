import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkGuard } from '../guards/check.guard';
import { ClientIndexComponent } from './client-index/client-index.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: ClientIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['client.index'],
    },
  },
  {
    path: 'create',
    component: ClientCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['client.create'],
    },
  },
  {
    path: 'edit/:id',
    component: ClientEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['client.edit'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
