import { ContentChild, TemplateRef, Directive } from '@angular/core';

import { TabTitleComponent } from './tab-title/tab-title.component';

@Directive({
  selector: 'tab'
})
export class TabDirective {
  @ContentChild(TabTitleComponent, { static: true }) title: TabTitleComponent;

  @ContentChild('tabContent', { static: true }) contentTemplateRef: TemplateRef<any>;

  public isActive: boolean = false;
}
