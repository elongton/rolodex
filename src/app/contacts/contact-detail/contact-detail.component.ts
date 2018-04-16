import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CT from '../store/contact.actions';
import * as UI from '../../store/ui/ui.actions';
import { NgForm } from '@angular/forms';
import * as fromRoot from '../../store/app.reducer'
import * as fromUI from '../../store/ui/ui.reducer'
import { Contact } from '../contact.model';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit, OnDestroy {
  contactDetail: Contact
  detailID: number
  editMode$: boolean
  editForm: FormGroup
  contactSubscription: Subscription


  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.store.select('ui').subscribe(uiState => {this.editMode$ = uiState.editingItem})
    this.contactSubscription = this.store.select('contact')
      .subscribe(contactState => {
        this.detailID = contactState.detailViewID
        this.contactDetail = contactState.contacts.find(x => x.id == this.detailID);
        this.editForm = new FormGroup({
          'first_name' : new FormControl(this.contactDetail.first_name, Validators.required),
          'last_name' : new FormControl(this.contactDetail.last_name, Validators.required),
          'email' : new FormControl(this.contactDetail.email, [Validators.required, Validators.email]),
          'organization': new FormControl(this.contactDetail.organization),
          'phone' : new FormControl(this.contactDetail.phone)
        });
      })
  }//ngOnInit

  changeMode(){
    this.store.dispatch(new UI.EditingItem(!this.editMode$))
  }

  onSubmit(){
    this.store.dispatch(new CT.UpdateContact({id: this.detailID, updatedContact: this.editForm.value}))
  }

  onDelete(){
    console.log('trying to delete')
    // this.store.dispatch(new CT.DeleteContact(this.contactDetail.id))

  }


  ngOnDestroy(){

  }


}
