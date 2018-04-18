import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material.module';
import { CoreModule } from '../modules/core.module';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactFilterPipe } from './contact-filter.pipe';
import { ContactFormNewComponent } from './contact-form-new/contact-form-new.component';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactDetailComponent,
    ContactFilterPipe,
    ContactFormNewComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
  ],
  exports: [
    ContactListComponent,
    ContactDetailComponent,
    ContactFormNewComponent
  ]
})

export class ContactModule {}
