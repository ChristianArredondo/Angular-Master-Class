import { Component, Injectable, OnInit } from '@angular/core';
import { MdToolbar, MdList } from '@angular/material';
import { Contact } from './models/contact';
import { ContactsService } from './contacts.service';
import { EventBusService } from './event-bus-service.service';
import { Observable } from "rxjs/Observable";

@Injectable()
@Component({
  selector: 'trm-contacts-app',
  template: `
    <md-toolbar color="primary">{{title | async}}</md-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  title: Observable<string>;
  constructor(private eventBus: EventBusService) { }

  ngOnInit () {
    this.title = this.eventBus.observe('appTitleChange');
  }

  contact: Contact = {
    id: 6,
    name: 'Diana Ellis',
    email: '',
    phone: '',
    birthday: '',
    website: '',
    image: '/assets/images/6.jpg',
    address: {
      street: '6554 park lane',
      zip: '43378',
      city: 'Rush',
      country: 'United States'
    }
  }

  trackById(id, item) {
    console.log(item.id)
    return item ? item.id : 0;
  }

}