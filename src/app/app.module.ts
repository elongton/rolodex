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

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProgramListComponent } from './programs/program-list/program-list.component';
import { InMemoryDataService }  from './shared/in-memory-data.service';
import { NavBottomComponent } from './widgets/nav-bottom/nav-bottom.component';

import { ProgramFormNewComponent } from './programs/program-form-new/program-form-new.component';
import { reducers } from './store/app.reducer';
import { ContactEffects } from './contacts/store/contact.effects';

import { OrganizationModule } from './organizations/organization.module';
import { ContactModule } from './contacts/contact.module';
//external
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClickOutsideModule } from 'ng-click-outside';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProgramListComponent,
    NavBottomComponent,
    ProgramFormNewComponent,
  ],
  imports: [
    ContactModule,
    OrganizationModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ClickOutsideModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ContactEffects]),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
