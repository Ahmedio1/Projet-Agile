import { Component, OnInit } from '@angular/core';
import {EquipeService} from "../services/equipe.service";
import {Equipe_joueur} from "../models/equipe_joueur";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  groupe:string="test";
  lesJoueurs:string[]=[];
  lesJoueurs2:string[]=[];
  joueur:string ="";
  joueur2:string ="";
  message:string='';
  message2:string='';
  equipeJ:Equipe_joueur[] = [];
  equipeJ2:Equipe_joueur[] = [];
  loading: boolean = false;

  constructor(public equipe:EquipeService) {

  }

  addJoueur(nom:HTMLInputElement,pseudo:HTMLInputElement):boolean{
    this.joueur=pseudo.value;

     if(this.inlesJoueurs(pseudo.value,this.lesJoueurs)){
      this.message= "le joueur est deja dans l'équipe ";
    }

    else if(this.joueur!==""){

      this.lesJoueurs.push(pseudo.value);
      this.message='';
       this.equipe.addEquipe_Joueurs(nom.value,pseudo.value);
       this.joueur="";
       console.log(this.equipeJ);
    }

    return false;
  }
  addJoueur2(nom:HTMLInputElement,pseudo:HTMLInputElement):boolean{
    this.joueur2=pseudo.value;

    if(this.inlesJoueurs(pseudo.value,this.lesJoueurs2)){
      this.message2= "le joueur est deja dans l'équipe ";
    }
    else if(this.joueur2!=""){
      this.lesJoueurs2.push(pseudo.value);
      this.message2='';
      this.equipe.addEquipe_Joueurs(nom.value,pseudo.value);
      this.joueur2="";
      console.log(this.equipeJ2);
    }

    return false;
  }

  addEquipe_Joueur(nom:HTMLInputElement) {
    if (this.lesJoueurs.length!=0){
      for (let pers of this.lesJoueurs){
        this.equipe.addEquipe_Joueurs(nom.value,pers);
      }

      console.log(this.equipeJ);
    }
  }
  inlesJoueurs(joueur:string,lesJoueurs:string[]):boolean{
    let ilEstLa: boolean=false;
    for(let joueurs of lesJoueurs){
      if(joueurs===joueur){
        ilEstLa=true;
      }
    }
    return ilEstLa;
  }
  afficherLesJoueurs():void{
    for(let element of this.lesJoueurs){console.log(element +'\n');}

  }


  ngOnInit(): void {
  this.loading=false;

    this.joueur="";
    this.loading=true;
  }

}
