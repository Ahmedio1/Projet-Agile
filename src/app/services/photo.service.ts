import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Theme} from '../models/Theme';
import {map} from 'rxjs/operators';
import {Photo} from '../models/Photo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) {

  }

  getPhoto(id: string | number ): Observable<Photo> {
    const url = 'https://equipe02.chez-wam.info:443/api/joueurs?id_joueur=eq.' + id;
    return this.http.get<Photo[]>(url).pipe(map(rep => rep[0]));
  }
}
