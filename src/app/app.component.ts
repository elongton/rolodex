import { Component, OnInit, ViewChild, ElementRef} from '@angular/core'
import {FormControl} from '@angular/forms';
import { DrawerService } from './shared/drawer.service';
import { NgSwitch } from '@angular/common';

import { Store } from '@ngrx/store';
import * as fromRoot from './store/app.reducer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rolodex';
  mode = new FormControl('over');
  drawerApp: string
  @ViewChild('sidenav') sidenav;

  constructor(private store: Store<fromRoot.AppState>){}

  ngOnInit(){
    this.store.select('ui')
      .subscribe(
        (uiState) => {
          this.drawerApp = uiState.drawerApp;
          this.sidenav.toggle()
        }
      )//subscribe
  }//ngOnInit

}
