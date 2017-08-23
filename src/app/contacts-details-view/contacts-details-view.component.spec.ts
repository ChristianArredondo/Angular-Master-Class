import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailsViewComponent } from './contacts-details-view.component';

describe('ContactsDetailsViewComponent', () => {
  let component: ContactsDetailsViewComponent;
  let fixture: ComponentFixture<ContactsDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
