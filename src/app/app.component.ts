import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core'
import {FormControl} from '@angular/forms';
import { NgSwitch } from '@angular/common';

import { Store } from '@ngrx/store';
import * as fromRoot from './store/app.reducer'
import * as UI from './store/ui/ui.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rolodex';
  mode = new FormControl('over');
  drawerState: boolean = false;
  drawerApp: string
  @ViewChild('sidenav') sidenav;


  constructor(private store: Store<fromRoot.AppState>){}

  ngOnInit(){
    this.store.select('ui').subscribe(
        (uiState) => {
          this.drawerApp = uiState.drawerApp;
          this.sidenav.open()
          // if (uiState.drawerOpen == true){
          //   this.sidenav.open();
          //   this.store.dispatch(new UI.OpenDrawer(false))
          // } else if (uiState.drawerOpen == false){
          //   console.log("its closed")
          // }
        }
      )//subscribe
  }//ngOnInit

  //change editing state to false when drawer is closed.
  onBackDropClick(){
    console.log('it was clicked')
  }
}
