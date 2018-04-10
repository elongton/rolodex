import { Component, OnInit, ViewChild, ElementRef} from '@angular/core'
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
  drawerState: boolean;
  drawerApp: string
  @ViewChild('sidenav') sidenav;

  constructor(private store: Store<fromRoot.AppState>){}

  ngOnInit(){
    this.store.select('ui')
      .subscribe(
        (uiState) => {
          this.drawerApp = uiState.drawerApp;
          if (uiState.drawerOpen == true){
            this.sidenav.open();
            this.store.dispatch(new UI.OpenDrawer(false))
          }
        }
      )//subscribe
  }//ngOnInit

}
