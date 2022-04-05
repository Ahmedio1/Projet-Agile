import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Theme} from '../models/Theme';
import {Question} from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  constructor(private http:HttpClient) {

  }

  getFormulaire(id: string | number): Observable<Theme> {
    const url = 'https://equipe02.chez-wam.info:443/api/themes?id_theme=eq.' + id;
    return this.http.get<Theme[]>(url).pipe(map(rep => rep[0]));
  }

  }

