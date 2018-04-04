import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material.module';
import { CoreModule } from '../modules/core.module';

import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactFilterPipe } from './contact-filter.pipe';
import { ContactFormNewComponent } from './contact-form-new/contact-form-new.component';

@NgModule({
  declarations: [
    ContactItemComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactFilterPipe,
    ContactFormNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CoreModule,
  ],
  exports: [
    ContactItemComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactFormNewComponent
  ]
})

export class ContactModule {}
