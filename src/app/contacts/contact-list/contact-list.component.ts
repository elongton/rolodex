import { Component, OnInit } from '@angular/core';
import { HeaderManagementService } from '../../header-management.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private headerService: HeaderManagementService) { }

  ngOnInit() {
    this.headerService.pageTitle.next('Contacts');
  }

}
