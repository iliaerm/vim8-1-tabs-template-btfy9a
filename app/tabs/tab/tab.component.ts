import { Component, ContentChild, TemplateRef } from "@angular/core";

import { TabContentComponent } from './tab-content/tab-content.component';
import { TabTitleComponent } from './tab-title/tab-title.component';

@Component({
    selector: 'tab',
    template: '<ng-content></ng-content>'
})
export class TabComponent {
    @ContentChild(TabContentComponent, { static: true }) content: TabContentComponent;

    @ContentChild(TabTitleComponent, { static: true }) title: TabTitleComponent;

    @ContentChild('tabContent', { static: true }) contentTemplateRef: TemplateRef<any>;

    public isActive: boolean = false;
}