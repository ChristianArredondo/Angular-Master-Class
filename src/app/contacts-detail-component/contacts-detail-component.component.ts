import { Component, OnInit, Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Route, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { MdButton, MdCard } from '@angular/material';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Injectable()
@Component({
  selector: 'trm-contacts-detail-component',
  templateUrl: './contacts-detail-component.component.html',
  styleUrls: ['./contacts-detail-component.component.css']
})
export class ContactsDetailComponentComponent implements OnInit {
  public contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.contactsService.getContact(id)
      .subscribe(contact => {
        this.contact = contact
        console.log(this.contact);
      });
  }

}
