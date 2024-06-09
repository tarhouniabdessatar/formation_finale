import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rdv } from '../../rdv';

@Component({
  selector: 'app-update-rdv',
  templateUrl: './update-rdv.component.html',
  styleUrl: './update-rdv.component.css'
})
export class UpdateRDVComponent implements OnInit {
  Ipp!:string;
  Nom!:string;
  Prenom!:string;
  Service!:string;
  DateRdv!:string;
  constructor(  private activateRoute : ActivatedRoute,
    private router:Router
  ){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe((parms)=>{
      this.Ipp=parms['ipp'];
    })
  
  }
  saveUpdateRdv(){
    let rdv :Rdv={
      Ipp:this.Ipp,
      Nom:this.Nom,
      Prenom:this.Prenom,
      Service:this.Service,
      DateRdv:this.DateRdv
    }
    alert("UPdate de IPP:"+this.Ipp +"Nom : "+this.Nom+"Prenom : "+ this.Prenom+"Date : "+this.DateRdv);
  }

}
