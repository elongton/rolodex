import { Component, OnInit } from '@angular/core';
import { HeaderManagementService } from '../header-management.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageTitle: string;

  constructor(private headerService: HeaderManagementService) { }

  ngOnInit() {
    this.headerService.pageTitle
      .subscribe(
        (page: string) => {
          this.pageTitle = page;
        }
      )//subscribe
    }//ngOnInit()

}
