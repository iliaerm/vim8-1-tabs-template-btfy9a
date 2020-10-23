import { Component, TemplateRef, ViewChild } from '@angular/core';

// This component is not used and can be removed.
@Component({
  selector: 'tab-content',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class TabContentComponent {
  @ViewChild(TemplateRef, { static: true })
  public templateRef: TemplateRef<any>;
}
