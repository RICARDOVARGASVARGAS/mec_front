import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTreeModule } from 'ng-zorro-antd/tree';

@NgModule({
  declarations: [
    UserPermissionComponent,
    UserIndexComponent,
    UserCreateComponent,
    UserEditComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    NzPopconfirmModule,
    NzTreeModule,
  ],
})
export class UserModule {}
