import { Component, OnInit } from '@angular/core';
import {ChronometreService} from '../services/chronometre.service';
import {QuestionsService} from '../services/questions.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../models/question';
import {Reponse} from '../models/reponse';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-chronometre',
  template: `
    <div *ngIf="question">
      <h1>{{question.libelle}}</h1>
      <h1>{{ this.chronoService.getMinutes()}}:{{this.chronoService.getSecondes()}}</h1>
      <button *ngFor="let reponse of reponses" (click)="getChoixJoueur(reponse)">{{reponse.libelle}}</button>
    </div>
  `,
  styles: [``
  ]
})
export class ChronometreComponent implements OnInit {
  question: Question = <Question>{};
  reponses: Reponse[] = [];
  laReponse: Reponse = <Reponse>{};
  loading: boolean = false;
  arraySelPoivre: Observable<any>[] = [];
  arrayNuggets: Observable<any>[] = [];
  array: Object[] = [];



  constructor(public chronoService:ChronometreService,private questionService:QuestionsService,private router:Router) {
  }



  ngOnInit(): void {


  }


  getChoixJoueur(reponse: Reponse) {
    this.reponses.forEach(x =>{
      if(x.bonne_reponse)
        this.laReponse = x;
    });
    console.log(reponse === this.laReponse);
    if(reponse === this.laReponse){
      return reponse === this.laReponse
    }
    return reponse === this.laReponse
  }

}

