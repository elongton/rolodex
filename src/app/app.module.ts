//angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//internal
import { CoreModule } from './modules/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
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
import { DrawerService } from './shared/drawer.service';
import { GlobalService } from './shared/global.service';
import { InMemoryDataService }  from './shared/in-memory-data.service';
import { NavBottomComponent } from './widgets/nav-bottom/nav-bottom.component';
import { OrganizationFormNewComponent } from './organizations/organization-form-new/organization-form-new.component';
import { ProgramFormNewComponent } from './programs/program-form-new/program-form-new.component';

//external
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClickOutsideModule } from 'ng-click-outside';


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
    ContactFormNewComponent,
    NavBottomComponent,
    OrganizationFormNewComponent,
    ProgramFormNewComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ClickOutsideModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HeaderManagementService,
              DataStorageService,
              ContactService,
              DrawerService,
              GlobalService,
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
