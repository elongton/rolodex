import { Component, OnInit } from '@angular/core';
import { HeaderManagementService } from '../../header-management.service';




@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  constructor(private headerService: HeaderManagementService) { }

  ngOnInit() {
    this.headerService.pageTitle.next('Organizations');
  }
}
