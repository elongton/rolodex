import { Component, OnInit, ViewChild, ElementRef} from '@angular/core'
import {FormControl} from '@angular/forms';
import { DrawerService } from './shared/drawer.service';

import { NgSwitch } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rolodex';
  mode = new FormControl('over');
  formName: string = "new_contact";
  @ViewChild('sidenav') sidenav;

  constructor(private drawer: DrawerService){}

  ngOnInit(){
    this.drawer.formToDisplayOnDrawer
      .subscribe(
        (formToDisplayOnDrawer: string) => {
          this.formName = formToDisplayOnDrawer;
          this.sidenav.toggle()
        }
      )//subscribe
  }//ngOnInit

}
