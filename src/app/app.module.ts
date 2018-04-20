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
import { InMemoryDataService }  from './shared/in-memory-data.service';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBottomComponent } from './widgets/nav-bottom/nav-bottom.component';


import { reducers } from './store/app.reducer';
import { ContactEffects } from './contacts/store/contact.effects';
import { OrganizationEffects } from './organizations/store/organization.effects';

import { OrganizationModule } from './organizations/organization.module';
import { ContactModule } from './contacts/contact.module';
import { ProgramModule } from './programs/program.module';
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
    NavBottomComponent,
  ],
  imports: [
    ContactModule,
    OrganizationModule,
    ProgramModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ClickOutsideModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ContactEffects, OrganizationEffects]),
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
