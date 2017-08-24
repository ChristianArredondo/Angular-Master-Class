import { Route } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponentComponent } from './contacts-detail-component/contacts-detail-component.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailsViewComponent } from './contacts-details-view/contacts-details-view.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from "app/about/about.component";

export const APP_ROUTES = [
  {
    path: '',
    component: ContactsDashboardComponent,
    children: [
      { path: '', redirectTo: 'contact/0', pathMatch: 'full' },
      { path: 'contact/:id', component: ContactsDetailsViewComponent },
      { path: 'contact/:id/edit', component: ContactsEditorComponent }
    ]
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  }
]
