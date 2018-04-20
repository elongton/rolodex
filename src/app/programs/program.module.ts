import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material.module';
import { CoreModule } from '../modules/core.module';


import { ProgramFormNewComponent } from './program-form-new/program-form-new.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';



@NgModule({
  declarations: [
    ProgramFormNewComponent,
    ProgramListComponent,
    ProgramDetailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
  ],
  exports: [
    ProgramFormNewComponent,
    ProgramListComponent,
    ProgramDetailComponent
  ]
})

export class ProgramModule {}
