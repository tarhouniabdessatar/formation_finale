import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrl: './add-rdv.component.css'
})
export class AddRDVComponent {
  constructor(private router: Router) { }

  addRDV(RDVForm: any) {
    //console.log(providerForm)
    let RDV = {
      IPP: RDVForm.IPP,
      Nom: RDVForm.Nom,
      Prenom: RDVForm.Prenom,
      Service: RDVForm.Service,
      DateRDV: RDVForm.DateRDV,
      //dateCreateRDV: new Date()
    };
  


  }
}
