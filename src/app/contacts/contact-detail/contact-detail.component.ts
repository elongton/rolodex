import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CT from '../store/contact.actions';
import { NgForm } from '@angular/forms';
import * as fromRoot from '../../store/app.reducer'
import { Contact } from '../contact.model';
import {Observable} from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contactDetail: Contact
  detailID: number
  editmode: boolean = false
  editForm: FormGroup


  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {


    this.store.select('contact')
      .subscribe(contactState => {
        this.detailID = contactState.detailViewID
        this.contactDetail = contactState.contacts.find(x => x.id == this.detailID);
        this.editForm = new FormGroup({
          'first_name' : new FormControl(this.contactDetail.first_name, Validators.required),
          'last_name' : new FormControl(this.contactDetail.last_name, Validators.required),
          'email' : new FormControl(this.contactDetail.email, [Validators.required, Validators.email]),
          'organization': new FormControl('no org'),
          'phone' : new FormControl(this.contactDetail.phone)
        });
      })
  }//ngOnInit

  changeMode(){
    this.editmode = !this.editmode;
  }

  onSubmit(){
    console.log(this.editForm.value)
    this.store.dispatch(new CT.UpdateContact({id: this.detailID, updatedContact: this.editForm.value}))
  }



}
