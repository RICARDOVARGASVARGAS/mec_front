import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ApiService } from '../services/api.service';

@Directive({
  selector: '[setPermission]',
  standalone: false,
})
export class PermissionDirective {
  private permissions: any = null;
  private access = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: ApiService
  ) {
    this.permissions = auth.user.permissions.map((item: any) => item.name);
  }

  ngOnInit(): void {
    this.updateView();
  }

  @Input()
  set setPermission(val: any) {
    this.access = val;
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  private updateView() {
    this.viewContainer.clear(); // limpiar todo en la vista
    if (this.checkPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private checkPermission(): boolean {
    if (this.permissions) {
      for (const check of this.access) {
        if (this.permissions.includes(check)) {
          return true;
        }
      }
    }
    return false;
  }
}
