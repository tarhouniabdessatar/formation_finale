import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: 'dashbaordRdv',
    loadChildren: () => import('./rdv/rdv.module').then(m => m.RdvModule)
  },

   {
    path: 'dashbaordPatient',
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
  },

  {
    path: 'dashbaordarticle',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  },

  {
    path:"home", component:NavbarComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
