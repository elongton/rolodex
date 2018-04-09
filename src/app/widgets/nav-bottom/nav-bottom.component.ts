import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import * as UI from '../../store/ui/ui.actions'
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer'
// import { GlobalService } from '../../shared/global.service';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.css'],
  animations: [
    trigger('buttonState', [
      state('inactive', style({opacity: 0})),
      state('active',   style({opacity: 1})),

      transition('inactive => active',  animate('100ms')),
      transition('active => inactive', animate('100ms')),
      transition('* => void', animate('100ms', style({opacity: 0}))),
    ])
  ]
})
export class NavBottomComponent implements OnInit {

  state='inactive';
  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {}

  toggleState() {this.state = this.state === 'active' ? 'inactive' : 'active';}
  slideDrawer(itemType){
    this.store.dispatch(new UI.ChangeDrawerApp(itemType))
  }
  onClickedOutside(){this.state = 'inactive';}
}

//(click)="sidenav.toggle()"
