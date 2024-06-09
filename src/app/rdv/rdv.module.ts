import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdvRoutingModule } from './rdv-routing.module';
import { MainrdvComponent } from './mainrdv/mainrdv.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';

import { AddRDVComponent } from './add-rdv/add-rdv.component';
import { FormsModule } from '@angular/forms';

import { UpdateRDVComponent } from './update-rdv/update-rdv.component';


@NgModule({
  declarations: [
    MainrdvComponent,UpdateRDVComponent,

    AddRDVComponent
  ],
  imports: [
    CommonModule,
    RdvRoutingModule,FormsModule,


    CommonModule,
    FormsModule,
    RdvRoutingModule

  ]
})
export class RdvModule { }
