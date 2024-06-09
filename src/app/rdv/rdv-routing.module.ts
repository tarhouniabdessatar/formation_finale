import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRDVComponent } from './add-rdv/add-rdv.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';
import { MainrdvComponent } from './mainrdv/mainrdv.component';
import { UpdateRDVComponent } from './update-rdv/update-rdv.component';

const routes: Routes = [
  {
    path: '',
    component: MainrdvComponent,
    children:[
      {
        path: 'list',
       component: ListRdvComponent,
      },
      {
        path: 'add',
       component: AddRDVComponent,
      },
      {
        path: 'update',
       component: UpdateRDVComponent,
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RdvRoutingModule { }
