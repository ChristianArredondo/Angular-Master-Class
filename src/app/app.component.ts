import { Component, Injectable, OnInit } from '@angular/core';
import { MdToolbar, MdList } from '@angular/material';
import { Contact } from './models/contact';
import { ContactsService } from './contacts.service';

@Injectable()
@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  title = 'Angular Master Class setup works!';
  contacts: Contact[];

  constructor(private contactsService: ContactsService) {
  }
  
  ngOnInit() {
    this.contacts = this.contactsService.contacts;
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
