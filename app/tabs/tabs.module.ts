import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabTitleComponent } from './tab/tab-title/tab-title.component';
import { TabsComponent } from './tabs.component';
import { TabDirective } from './tab/tab.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [TabsComponent, TabDirective, TabTitleComponent],
  exports: [TabsComponent, TabDirective, TabTitleComponent]
})
export class TabsModule { }
