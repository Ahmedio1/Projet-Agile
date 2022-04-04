import { Injectable } from '@angular/core';
import {Question} from '../models/question';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, filter, map} from 'rxjs/operators';
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestion(id: string | number): Observable<Question> {
    const url = 'https://equipe02.chez-wam.info/api/questions?id_question=eq.' + id;
    return this.http.get<Question[]>(url).pipe(map(rep => rep[0]));
  }

  getQuestions(): Observable<Question[]> {
    const url = 'https://equipe02.chez-wam.info/api/questions';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }

  getNuggets(): Observable<Question[]> {
    const url = 'https://equipe02.chez-wam.info/api/questions?id_catetgorie=eq.2';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }

  getNugget(id:number){
    const url ='https://equipe02.chez-wam.info:443/api/questions?id_question=eq.'+id+'&id_catetgorie=eq.2';
      return this.http.get<Question[]>(url).pipe(map(rep => rep[0]));
  }

}
