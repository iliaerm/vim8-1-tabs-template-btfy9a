import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabTitleComponent } from './tab/tab-title/tab-title.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs.component';
import { TabContentComponent } from './tab/tab-content/tab-content.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        TabsComponent,
        TabComponent,
        TabTitleComponent,
        TabContentComponent
    ],
    exports: [
        TabsComponent,
        TabComponent,
        TabTitleComponent,
        TabContentComponent
    ]
})
export class TabsModule { }