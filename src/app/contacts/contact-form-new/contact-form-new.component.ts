import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import { Store } from '@ngrx/store';
import * as CT from '../store/contact.actions';
import * as fromRoot from '../../store/app.reducer'

@Component({
  selector: 'app-contact-form-new',
  templateUrl: './contact-form-new.component.html',
  styleUrls: ['./contact-form-new.component.css']
})
export class ContactFormNewComponent implements OnInit {

  constructor(private contactService: ContactService,
              private store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.contactService.addContact(form.value as Contact).subscribe();
    this.store.dispatch(new CT.AddContact(form.value as Contact))
    form.reset();
  }

}
