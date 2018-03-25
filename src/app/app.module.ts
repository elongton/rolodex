import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProgramListComponent } from './programs/program-list/program-list.component';
import { OrganizationListComponent } from './organizations/organization-list/organization-list.component';
import { HeaderManagementService } from './shared/header-management.service';
import { DataStorageService } from './shared/datastorage.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactFilterPipe } from './contacts/contact-filter.pipe';


const appRoutes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactListComponent, data: {page: 'Contacts'}},
  {path: 'organizations', component: OrganizationListComponent, data: {page: 'Organizations'}},
  {path: 'programs', component: ProgramListComponent, data: {page: 'Programs'}},
]


@NgModule({
  declarations: [
    AppComponent,
    ContactItemComponent,
    ContactListComponent,
    ContactDetailComponent,
    HeaderComponent,
    SidebarComponent,
    ProgramListComponent,
    OrganizationListComponent,
    ContactFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [HeaderManagementService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
