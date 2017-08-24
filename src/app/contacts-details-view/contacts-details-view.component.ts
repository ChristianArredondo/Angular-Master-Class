import { Component, OnInit, Input, EventEmitter, Output, Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus-service.service';

@Injectable()
@Component({
  selector: 'trm-contacts-details-view',
  templateUrl: './contacts-details-view.component.html',
  styleUrls: ['./contacts-details-view.component.css']
})
export class ContactsDetailsViewComponent implements OnInit {
  @Output() back = new EventEmitter();
  title: string;
  contact: Contact;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService,
    private eventBus: EventBusService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contactsService.getContact(this.id)
      .subscribe(contact => {
        this.contact = contact
        this.eventBus.emit('appTitleChange', this.contact.name);
      });
      
    
  }

  navigateToEditor () {
    this.router.navigate([`/contact/${this.id}/edit`]);
  }

  navigateToList () {
    this.router.navigate(['/']);
  }

}
