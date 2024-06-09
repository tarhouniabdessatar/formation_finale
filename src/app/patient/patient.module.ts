import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { MainpatientComponent } from './mainpatient/mainpatient.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';


@NgModule({
  declarations: [
    MainpatientComponent,
    ListePatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
