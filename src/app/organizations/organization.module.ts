import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material.module';
import { CoreModule } from '../modules/core.module';


import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { OrganizationFormNewComponent } from './organization-form-new/organization-form-new.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';


@NgModule({
  declarations: [
    OrganizationDetailComponent,
    OrganizationFormNewComponent,
    OrganizationListComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
  ],
  exports: [
    OrganizationDetailComponent,
    OrganizationFormNewComponent,
    OrganizationListComponent
  ]
})

export class OrganizationModule {}
