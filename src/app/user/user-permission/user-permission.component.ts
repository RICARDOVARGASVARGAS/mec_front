import { Component } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-permission',
  templateUrl: './user-permission.component.html',
  styleUrl: './user-permission.component.css'
})
export class UserPermissionComponent {
  id: any = null;
  item: any = [];
  modules: any = null;

  constructor(public service: ApiService, private route: ActivatedRoute) {
    route.params.subscribe((params: any) => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.service
      .api(`users/${this.id}?included=permissions`, 'get')
      .subscribe((res: any) => {
        this.item = res.data;
        this.checkPermission();
      });
    this.service.api(`modules`, 'get').subscribe((res: any) => {
      this.modules = res.data;
      this.makeNode();
    });
  }
  permissions: any = [];
  defaultCheckedKeys: any = []; //Checked
  defaultSelectedKeys = []; //Selected
  defaultExpandedKeys = []; //Expanded
  node: any = null;

  checkPermission() {
    this.defaultCheckedKeys = [];
    this.item.permissions.forEach((permission: any) => {
      let m = '' + permission.module_id;
      let p = '' + permission.id;
      let key = m + '-' + p;
      this.defaultCheckedKeys.push(key);
      this.permissions.push(permission.id);
    });
  }

  makeNode() {
    let node: any = [];
    this.modules.forEach((module: any) => {
      let m: any = {}; // module
      m.title = module.show.toUpperCase();
      m.key = '' + module.id;
      m.expanded = true;
      m.children = [];
      module.permissions.forEach((permission: any) => {
        let p: any = {}; // permission
        p.title = permission.show.toUpperCase();
        p.key = module.id + '-' + permission.id;
        p.isLeaf = true;
        m.children.push(p);
      });
      node.push(m);
    });
    this.node = node;
  }

  nzEvent(event: NzFormatEmitEvent): void {
    if (event.eventName == 'check') {
      let ids: any = [];
      event.nodes!.forEach((node: any) => {
        if (node._children.length > 0) {
          node._children.forEach((child: any) => {
            const key = +child.key.split('-').pop();
            ids.push(key);
          });
        } else {
          const key = +node.key.split('-').pop();
          ids.push(key);
        }
      });
      this.permissions = ids;
    }
  }

  updatePermissions() {
    this.service
      .api('users/updatePermission', 'post', {
        user_id: this.id,
        permissions: this.permissions.join(','),
      })
      .subscribe(
        (res: any) => {
          this.service.toast('success', 'Actualización exitosa');
        },
        (err: any) => {
          this.service.toast('error', 'Actualización fallida');
        }
      );
  }
}
