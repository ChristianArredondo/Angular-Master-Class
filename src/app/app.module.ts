import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdListModule, } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactsAppComponent } from './app.component';
import { ContactsHeaderComponent } from './contacts-header';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdListModule,
    MdToolbarModule
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
