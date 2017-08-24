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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService,
    private eventBus: EventBusService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(paramMap => {
        let id = paramMap.get('id');
        return this.contactsService.getContact(id)})
      .subscribe(contact => {
        this.contact = contact
        this.eventBus.emit('appTitleChange', this.contact.name)
    });
  }

  navigateToEditor () {
    this.router.navigate([`edit`], {relativeTo: this.route});
  }

  // navigateToList () {
  //   this.router.navigate(['/']);
  // }

}
