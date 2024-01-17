import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { checkGuard } from '../guards/check.guard';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: UserIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['user.index'],
    },
  },
  {
    path: 'create',
    component: UserCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['user.create'],
    },
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['user.edit'],
    },
  },
  {
    path: 'permission/:id',
    component: UserPermissionComponent,
    canActivate: [checkGuard],
    data: {
      access: ['user.permission'],
    },
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [checkGuard],
    data: {
      access: ['user.profile'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
