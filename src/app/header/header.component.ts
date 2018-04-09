import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../store/app.reducer'
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageTitle: string;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit(){
      this.store.select('ui').subscribe(
        result => {
          this.pageTitle = result.headerString
        }
      )
    }//ngOnInit()

}
