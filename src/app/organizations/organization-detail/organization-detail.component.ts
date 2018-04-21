import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as OR from '../store/organization.actions';
import * as UI from '../../store/ui/ui.actions';
import { NgForm } from '@angular/forms';
import * as fromRoot from '../../store/app.reducer'
import * as fromUI from '../../store/ui/ui.reducer'
import { Organization } from '../organization.model';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {

  orgDetail: Organization
  detailID: number
  editMode: boolean
  editForm: FormGroup
  orgSubscription: Subscription

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.store.select('ui').subscribe(uiState => {this.editMode = uiState.editingItem})
    this.orgSubscription = this.store.select('organization')
      .subscribe(orgState => {
        this.detailID = orgState.detailViewID
        this.orgDetail = orgState.orgs.find(x => x.id == this.detailID);
        // this.editForm = new FormGroup({
        //   'first_name' : new FormControl(this.contactDetail.first_name, Validators.required),
        //   'last_name' : new FormControl(this.contactDetail.last_name, Validators.required),
        //   'email' : new FormControl(this.contactDetail.email, [Validators.required, Validators.email]),
        //   'organization': new FormControl(this.contactDetail.organization),
        //   'phone' : new FormControl(this.contactDetail.phone)
        // });
      })
  }//ngOnInit

}
