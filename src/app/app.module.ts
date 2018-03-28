import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './modules/core.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
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
import { ContactService } from './contacts/contact.service';
import { ContactFilterPipe } from './contacts/contact-filter.pipe';
import { ContactFormNewComponent } from './contacts/contact-form-new/contact-form-new.component';


import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/in-memory-data.service';


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
    ContactFilterPipe,
    ContactFormNewComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HeaderManagementService, DataStorageService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
