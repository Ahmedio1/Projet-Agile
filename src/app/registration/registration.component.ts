import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  groupe:string="test";
  lesJoueurs:string[]=[];

  message:string='';

  addJoueur(pseudo:HTMLInputElement):boolean{

    if(this.inlesJoueurs(pseudo.value)){
      this.message= "le joueur est deja dans l'équipe ";
    }
    else if(pseudo.value!=""){

      this.lesJoueurs.push(pseudo.value);
      this.message='';
    }
    return false;
  }
  addEquipe(){



  }
  inlesJoueurs(joueur:string):boolean{
    let ilEstLa: boolean=false;
    for(let joueurs of this.lesJoueurs){
      if(joueurs===joueur){
        ilEstLa=true;
      }
    }
    return ilEstLa;
  }


  constructor() { }

  ngOnInit(): void {
  }
  afficherLesJoueurs():void{
    for(let element of this.lesJoueurs){console.log(element +'\n');}

  }

}
