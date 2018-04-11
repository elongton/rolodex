import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer'
import { Contact } from '../contact.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contactDetail: Contact
  detailID: number
  editmode: boolean = false

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.store.select('contact')
      .subscribe(contactState => {
        this.detailID = contactState.detailViewID
        this.contactDetail = contactState.contacts.find(x => x.id == this.detailID);
      })
  }//ngOnInit

  changeMode(){
    this.editmode = !this.editmode;
  }

}
