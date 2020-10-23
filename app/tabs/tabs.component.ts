import { AfterContentInit, Component, ContentChildren, OnDestroy, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';

import { TabDirective } from './tab/tab.directive';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.html'
})
export class TabsComponent implements AfterContentInit, OnDestroy {

  @ContentChildren(TabDirective) public tabs: QueryList<TabDirective>;

  public activeTab: TabDirective;

  private tabsChangesSubscription: Subscription;

  public ngAfterContentInit(): void {
    // By default first tab is active.
    this.selectTab(this.tabs.first);

    this.tabsChangesSubscription = this.tabs.changes.subscribe(() => {
      if (!this.activeTab || !this.tabs.find(tab => tab === this.activeTab)) {
        // If active tab is no longer available switch to the first tab.
        this.selectTab(this.tabs.first);
      }
    });
  }

  public ngOnDestroy(): void {
    if (this.tabsChangesSubscription) {
      this.tabsChangesSubscription.unsubscribe();
    }
  }

  public selectTab(tab: TabDirective) {
    if (this.activeTab === tab) {
      return;
    }
    if (this.activeTab) {
      this.activeTab.isActive = false;
    }
    if (tab) {
      tab.isActive = true;
    }

    this.activeTab = tab;
  }
}