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
  static ekip_joueurs=9;
  equipe: Equipe = <Equipe>{}
  joueur: Joueur = <Joueur>{}
  constructor(private http:HttpClient) {
  }

  addEquipe(equipe:Equipe):Observable<Equipe>{
  const url = 'https://equipe02.chez-wam.info:443/api/equipes'
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Equipe>(url, equipe, httpOptions);
  }

  addEquipe_Joueurs(nom:string,pseaudo:string):Observable<Equipe_joueur>{

    const urlJoueur = 'https://equipe02.chez-wam.info:443/api/joueurs?nom=ed.'+ pseaudo;
    this.http.get<Joueur[]>(urlJoueur).pipe(map(rep => rep[0])).subscribe(elt => this.joueur=elt);
    const urlEquipe = 'https://equipe02.chez-wam.info:443/api/joueurs?nom=ed.'+nom;
    this.http.get<Equipe[]>(urlEquipe).pipe(map(rep => rep[0])).subscribe(elt =>this.equipe=elt );
    const url = 'https://equipe02.chez-wam.info:443/api/equipes_joueurs'
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    let equipe_joueur:Equipe_joueur = {id_equipe_joueur:EquipeService.ekip_joueurs++,id_equipe:this.equipe.id_equipe,id_joueur:this.joueur.id_joueur}
    return this.http.post<Equipe_joueur>(url, equipe_joueur, httpOptions);
}
}

