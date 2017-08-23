import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '../models/contact';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-details-view',
  templateUrl: './contacts-details-view.component.html',
  styleUrls: ['./contacts-details-view.component.css']
})
export class ContactsDetailsViewComponent implements OnInit {
  @Output() back = new EventEmitter();

  contact: Contact;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contactsService.getContact(this.id)
      .subscribe(contact => {
        this.contact = contact
        console.log(this.contact);
      });
  }

  navigateToEditor () {
    this.router.navigate([`/contact/${this.id}/edit`]);
  }

  navigateToList () {
    this.router.navigate(['/']);
  }

}
