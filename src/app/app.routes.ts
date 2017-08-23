import { Route } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponentComponent } from './contacts-detail-component/contacts-detail-component.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

export const APP_ROUTES = [
  { path: '', component: ContactsListComponent},
  { path: 'contact/:id', component: ContactsDetailComponentComponent },
  { path: 'contact/:id/edit', component: ContactsEditorComponent },
  { path: '**', redirectTo: '', }
]