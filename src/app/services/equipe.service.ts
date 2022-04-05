import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Equipe} from "../models/equipe";
import {Joueur} from "../models/joueur";
import {Question} from "../models/question";
import {Equipe_joueur} from "../models/equipe_joueur";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  ekip_joueur:number=0;
   ekip =0;
  equipe: Equipe;
  joueur: Joueur
  constructor(private http:HttpClient) {
    this.equipe = <Equipe>{}
    this.joueur = <Joueur>{}
  }


  getJoueur(pseudo:string){
    const urlJoueur = 'https://equipe02.chez-wam.info:443/api/joueurs?pseudo=eq.'+ pseudo;
    return this.http.get<Joueur[]>(urlJoueur).pipe(map(rep => rep[0]));
  }

  getEquipe(nom:string){
    const urlEquipe = 'https://equipe02.chez-wam.info:443/api/equipes?nom=eq.'+nom
    return this.http.get<Equipe[]>(urlEquipe).pipe(map(rep => rep[0]));
  }
  getEquipes(){
    const urlEquipe = 'https://equipe02.chez-wam.info:443/api/equipes'
    return this.http.get<Equipe[]>(urlEquipe);
  }

  getEquipe_joueurs(){
    const url = 'https://equipe02.chez-wam.info:443/api/equipes_joueurs'
    return this.http.get<Equipe_joueur[]>(url);
  }

  addEquipe(nom:string){
    const url = 'https://equipe02.chez-wam.info:443/api/equipes'
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    console.log(nom)
    this.getEquipes().subscribe(elt=> this.ekip=elt.length+1);
    let equipe:Equipe = {id_equipe:this.ekip,nom:nom};
    return this.http.post<Equipe>(url, equipe, httpOptions);
  }

  addEquipe_Joueurs(nom:string,pseaudo:string){

    this.getJoueur(pseaudo).subscribe(elt => this.joueur=elt);
    this.getEquipe(nom).subscribe(elt=> this.equipe=elt);
    if(this.equipe===undefined){
      this.addEquipe(nom).subscribe(elt => this.equipe=elt );
    }
    console.log(this.equipe)
    const url = 'https://equipe02.chez-wam.info:443/api/equipes_joueurs'
    this.getEquipe_joueurs().subscribe(elt => this.ekip_joueur=elt.length+2);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    console.log(this.equipe.id_equipe)
    let equipe_joueur:Equipe_joueur = {id_equipe_joueur:this.ekip_joueur,id_equipe:this.equipe.id_equipe,id_joueur:this.joueur.id_joueur};
    return this.http.post<Equipe_joueur>(url, equipe_joueur, httpOptions);
    /*const url = 'https://equipe02.chez-wam.info:443/api/equipes_joueurs?id_equipe_joueur=eq.9'
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.delete(url, httpOptions);*/
}
}

