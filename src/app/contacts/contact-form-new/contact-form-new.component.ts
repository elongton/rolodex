import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact.model';
import { Store } from '@ngrx/store';
import * as CT from '../store/contact.actions';
import * as UI from '../../store/ui/ui.actions'
import * as fromRoot from '../../store/app.reducer'

@Component({
  selector: 'app-contact-form-new',
  templateUrl: './contact-form-new.component.html',
  styleUrls: ['./contact-form-new.component.css']
})
export class ContactFormNewComponent implements OnInit {

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.store.dispatch(new CT.AddContact(form.value as Contact))
    form.reset();
  }

}
