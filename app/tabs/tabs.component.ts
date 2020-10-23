import { AfterContentInit, Component, ContentChildren, OnDestroy, QueryList } from "@angular/core";
import { Subscription } from 'rxjs';

import { TabComponent } from './tab/tab.component';

@Component({
    selector: 'tabs',
    templateUrl: './tabs.html'
})
export class TabsComponent implements AfterContentInit, OnDestroy {

    @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;

    public activeTab: TabComponent;

    private tabsChangesSubscription: Subscription;

    public ngAfterContentInit(): void {
        // By default first tab is active.
        this.selectTab(this.tabs.first);

        this.tabsChangesSubscription = this.tabs.changes.subscribe(() => {
            if (this.activeTab && this.tabs.find(tab => tab === this.activeTab)) {
                return;
            }

            // If active tab is no longer available switch to the first tab.
            this.selectTab(this.tabs.first);
        });
    }

    public ngOnDestroy(): void {
        if (this.tabsChangesSubscription) {
            this.tabsChangesSubscription.unsubscribe();
        }
    }

    public selectTab(tab: TabComponent) {
        if (this.activeTab === tab) {
            return;
        }
        if (this.activeTab) {
            this.activeTab.isActive = false;
        }
    
        tab.isActive = true;
        this.activeTab = tab;
    }
}