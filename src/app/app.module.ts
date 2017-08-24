import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { 
  MdButtonModule, 
  MdToolbarModule, 
  MdListModule, 
  MdCardModule,
  MdInputModule,
  MdIconModule,
  MdSidenavModule,
  MdTabsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactsAppComponent } from './app.component';
import { ContactsHeaderComponent } from './contacts-header';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES} from './app.routes';
import { ContactsDetailComponentComponent } from './contacts-detail-component/contacts-detail-component.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailsViewComponent } from './contacts-details-view/contacts-details-view.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { EventBusService } from './event-bus-service.service';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';



@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponentComponent,
    ContactsEditorComponent,
    ContactsDetailsViewComponent,
    TabsComponent,
    TabComponent,
    ContactsDashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdInputModule,
    MdIconModule,
    MdSidenavModule,
    MdTabsModule,
    MdToolbarModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [
    ContactsService,
    EventBusService
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
