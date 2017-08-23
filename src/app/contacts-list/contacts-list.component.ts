import { Component, Injectable, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Injectable()
@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[];
  
  constructor(contactsService: ContactsService) {
    contactsService.getContacts()
      .subscribe(contacts => {
          this.contacts = contacts;
      })};
  
  ngOnInit() {}

}
