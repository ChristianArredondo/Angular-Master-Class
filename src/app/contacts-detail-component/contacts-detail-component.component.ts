import { Component, OnInit, Injectable, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '../models/contact';
import { Route, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { MdButton, MdCard } from '@angular/material';
import { Observable } from 'rxjs';
@Injectable()
@Component({
  selector: 'trm-contacts-detail-component',
  templateUrl: './contacts-detail-component.component.html',
  styleUrls: ['./contacts-detail-component.component.css']
})
export class ContactsDetailComponentComponent implements OnInit {
  @Input() contact: Contact;
  @Output() edit = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.contactsService.getContact(id)
      .subscribe(contact => {
        this.contact = contact
      });
  }

}
