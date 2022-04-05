import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../models/question';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassementService {

  constructor(private http: HttpClient) { }

  //Joueurs

  getJoueur(id: string | number): Observable<any> {
    const url = 'https://equipe02.chez-wam.info/api/joueurs?id_joueur=eq.' + id;
    return this.http.get<Question[]>(url).pipe(map(rep => rep[0]));
  }

  getJoueurs(): Observable<any[]> {
    const url = 'https://equipe02.chez-wam.info/api/joueurs';
    return this.http.get<Question[]>(url).pipe();
  }

  //Equipes


  getEquipe(id: string | number): Observable<any> {
    const url = 'https://equipe02.chez-wam.info/api/equipes?id_equipe=eq.' + id;
    return this.http.get<Question[]>(url).pipe(map(rep => rep[0]));
  }

  getEquipes(): Observable<any[]> {
    const url = 'https://equipe02.chez-wam.info/api/equipes';
    return this.http.get<Question[]>(url).pipe();
  }

  getEquipesJoueurs(): Observable<any[]> {
    const url = 'https://equipe02.chez-wam.info/api/equipes_joueurs';
    return this.http.get<Question[]>(url).pipe();
  }

}
