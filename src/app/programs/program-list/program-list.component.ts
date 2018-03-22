import { Component, OnInit } from '@angular/core';
import { HeaderManagementService } from '../../shared/header-management.service';



@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {

  constructor(private headerService: HeaderManagementService) { }

  ngOnInit() {
    this.headerService.pageTitle.next('Programs');
  }

}
