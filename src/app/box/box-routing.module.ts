import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkGuard } from '../guards/check.guard';
import { BoxIndexComponent } from './box-index/box-index.component';
import { BoxCreateComponent } from './box-create/box-create.component';
import { BoxEditComponent } from './box-edit/box-edit.component';
import { BoxShowComponent } from './box-show/box-show.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: BoxIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['box.index'],
    },
  },
  {
    path: 'create',
    component: BoxCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['box.create'],
    },
  },
  {
    path: 'edit/:id',
    component: BoxEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['box.edit'],
    },
  },
  {
    path: 'show/:id',
    component: BoxShowComponent,
    canActivate: [checkGuard],
    data: {
      access: ['box.show'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxRoutingModule {}
