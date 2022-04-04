import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Question} from '../models/question';
import {QuestionsService} from '../services/questions.service';
import {logger} from "codelyzer/util/logger";
import {ActivatedRoute} from '@angular/router';
import {Reponse} from '../models/reponse';
import {ReponsesService} from '../services/reponses.service';
import {HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question: Question = <Question>{};
  reponses: Reponse[] = [];
  laReponse: Reponse = <Reponse>{};
  loading: boolean = false;
  arraySelPoivre: Observable<any>[] = [];
  arrayNuggets: Observable<any>[] = [];
  array: Observable<any>[] = [];

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute, private reponsesService: ReponsesService) { }

  ngOnInit(): void {
    this.loading = true;
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.questionsService.getQuestion(id).subscribe(question => {
      this.question = question;
      this.reponsesService.getReponses(id).subscribe(reponses => {
        this.reponses = reponses;
        this.loading = false;
      });
    });
  }

  getChoixJoueur(reponse: Reponse) {
    this.reponses.forEach(x =>{
      if(x.bonne_reponse)
        this.laReponse = x;
    });
    console.log(reponse === this.laReponse);
    return (reponse === this.laReponse);
  }

  generateQuestionsArray(sp: number, nug:number):void{
    //this.array.push()
  }

  generateSelPoivreArray():void{
    this.arraySelPoivre.push(this.getCat2());

  }

  generateNuggetsArray():void{
    this.arraySelPoivre.push(this.getCat1());
  }

  getCat1(): Observable<Question[]> {
    const url = 'https://equipe02.chez-wam.info/api/questions?id_catetgorie=eq.1';
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

  getCat2(): Observable<Question[]> {
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

}
