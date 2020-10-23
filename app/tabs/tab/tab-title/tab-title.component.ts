import { Component, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: "tab-title",
  template: "<ng-template><ng-content></ng-content></ng-template>"
})
export class TabTitleComponent {
  @ViewChild(TemplateRef, { static: true })
  public templateRef: TemplateRef<any>;
}
