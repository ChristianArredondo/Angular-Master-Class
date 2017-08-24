import { Component, Injectable, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/Observable';
import { MdInputContainer, MdIcon } from '@angular/material';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import { Subject } from 'rxjs/Subject';
import { EventBusService } from '../event-bus-service.service';

@Injectable()
@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;
  private terms$ = new  Subject<string>();
  
  constructor (
    private contactsService: ContactsService,
    private eventBus: EventBusService
  ) { }

  ngOnInit () {
    this.contacts$ = this.terms$
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => this.contactsService.search(term))
      .merge(this.contactsService.getContacts());
      this.eventBus.emit('appTitleChange', 'Contacts');
  }

}
