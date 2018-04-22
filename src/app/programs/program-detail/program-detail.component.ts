import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PR from '../store/program.actions';
import * as UI from '../../store/ui/ui.actions';
import { NgForm } from '@angular/forms';
import * as fromRoot from '../../store/app.reducer'
import * as fromUI from '../../store/ui/ui.reducer'
import { Program } from '../program.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {

  progDetail: Program
  detailID: number
  editMode: boolean
  editForm: FormGroup
  progSubscription: Subscription


  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {

    this.store.select('ui').subscribe(uiState => {this.editMode = uiState.editingItem})
    this.progSubscription = this.store.select('program')
      .subscribe(progState => {
        this.detailID = progState.detailViewID
        this.progDetail = progState.programs.find(x => x.id == this.detailID);
        this.editForm = new FormGroup({
          'name' : new FormControl(this.progDetail.name, Validators.required),
          'date' : new FormControl(this.progDetail.date, Validators.required),
          'time' : new FormControl(this.progDetail.time, Validators.required),
          'organization': new FormControl(this.progDetail.organization),
          'primary_contacts' : new FormControl(this.progDetail.primary_contacts, Validators.required),
          'latest_rating' : new FormControl(this.progDetail.latest_rating, Validators.required),
          'average_rating' : new FormControl(this.progDetail.average_rating, Validators.required),
        });
      })//subscribe
  }//ngOnInit()


  changeMode(){
    this.store.dispatch(new UI.EditingItem(!this.editMode))
  }


}
