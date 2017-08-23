import { Component, Injectable, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/Observable';
import { MdInputContainer, MdIcon } from '@angular/material';

@Injectable()
@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;
  
  constructor (
    private contactsService: ContactsService
  ) {
    this.contacts$ = contactsService.getContacts();
    contactsService.getContacts();
  }

  ngOnInit () {}

  search (val) {
    this.contacts$ = this.contactsService.search(val);
  }

}
