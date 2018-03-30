import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { DrawerService } from '../../shared/drawer.service';
import { GlobalService } from '../../shared/global.service';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.css'],
  animations: [
    trigger('buttonState', [
      state('inactive', style({opacity: 0})),
      state('active',   style({opacity: 1})),
      transition('inactive => active',  animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ])
  ]
})
export class NavBottomComponent implements OnInit {

  state='inactive';
  constructor(private drawer: DrawerService, private globalService: GlobalService) { }

  ngOnInit() {}

  toggleState() {this.state = this.state === 'active' ? 'inactive' : 'active';}
  slideDrawer(itemType){
    this.drawer.formToDisplayOnDrawer.next(itemType);
  }
}

//(click)="sidenav.toggle()"
