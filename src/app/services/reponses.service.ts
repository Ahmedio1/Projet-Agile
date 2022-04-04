import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reponse} from "../models/reponse";

@Injectable({
  providedIn: 'root'
})
export class ReponsesService {

  constructor(private http: HttpClient) { }

  getReponses(id: string | number): Observable<Reponse[]> {
    const url = 'https://equipe02.chez-wam.info/api/reponses?id_question=eq.' + id;
    return this.http.get<Reponse[]>(url);
  }
}
