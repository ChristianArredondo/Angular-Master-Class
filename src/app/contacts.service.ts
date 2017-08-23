import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Observable } from 'rxjs/Observable';
import { Contact } from './models/contact';
import { HttpClient } from '@angular/common/http';

interface ContactResponse  { item  : Contact }
interface ContactsResponse { items : Contact[] }

@Injectable()
export class ContactsService {
  API_ENDPOINT = 'http://localhost:4201';
  
  constructor(
    private http: HttpClient,
    ) { }

  get contacts () {
    return CONTACT_DATA;
  }

  getContacts() : Observable<Array<Contact>>  {
    let url = 'http://localhost:4201/api/contacts';
    return this.http.get<ContactsResponse>(url)
      .map(data => data.items);
  }

  getContact(id: string) : Observable<Contact>  {
    let url = 'http://localhost:4201/api/contacts/' + id;
    return this.http.get<ContactResponse>(url)
      .map(data => data.item);
  }

  updateContact(contact: Contact)  {
    let url = 'http://localhost:4201/api/contacts/' + contact.id;
    return this.http.put<ContactResponse>(url, contact)
      .map(data => data.item);
  }

  search (term: string) {
    let url = `http://localhost:4201/api/search?text=${term}`;
    return this.http.get<ContactsResponse>(url)
    .map(data => data.items);
  }
  
}


