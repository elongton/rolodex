import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramListComponent } from '../programs/program-list/program-list.component';
import { OrganizationListComponent } from '../organizations/organization-list/organization-list.component';
import { ContactListComponent } from '../contacts/contact-list/contact-list.component';
import { ContactFormNewComponent } from '../contacts/contact-form-new/contact-form-new.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactListComponent},
  {path: 'organizations', component: OrganizationListComponent},
  {path: 'programs', component: ProgramListComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
