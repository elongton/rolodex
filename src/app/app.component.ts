import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core'
import {FormControl} from '@angular/forms';
import { NgSwitch } from '@angular/common';
import {Observable} from 'rxjs/Observable';


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
  drawerState: boolean = false
  drawerApp$: Observable<string>
  @ViewChild('sidenav') sidenav;


  constructor(private store: Store<fromRoot.AppState>){}

  ngOnInit(){
    this.store.select(fromRoot.drawerState).subscribe(
      (state) => {
        if (state){this.sidenav.open()}
        else {this.sidenav.close()}
      });
    this.drawerApp$ = this.store.select(fromRoot.drawerApp);
  }//ngOnInit()


  //change editing state to false when drawer is closed.
  onBackDropClick(){ //used primarily to close the drawer
    this.store.dispatch(new UI.CloseDrawer())
    //this is set up to emulate when the drawer closes
    setTimeout(()=>{
      this.store.dispatch(new UI.EditingItem(false))
    },500)

  }
}
