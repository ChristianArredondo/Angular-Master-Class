import { Component, OnInit, Injectable } from '@angular/core';
import { MdInputContainer } from '@angular/material';
import { Contact } from '../models/contact';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { EventBusService } from '../event-bus-service.service';


@Injectable()
@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  contact: Contact = <Contact>{ address: {}};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService,
    private eventBus: EventBusService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.contactsService.getContact(id)
      .subscribe(contact => {
        this.contact = contact
        this.eventBus.emit('appTitleChange', `Editing: ${this.contact.name}`);
      });
  }

  save (contact: Contact) {
    this.contactsService.updateContact(contact)
    .subscribe(contact => {
      this.contact = contact;
      this.goToDetails(contact);
    });
  }
 
  cancel (contact: Contact) {
    this.goToDetails(contact)
  }
 
  goToDetails (contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

}
