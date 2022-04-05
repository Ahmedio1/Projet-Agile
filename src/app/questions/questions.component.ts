import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../models/question';
import {QuestionsService} from '../services/questions.service';
import {logger} from 'codelyzer/util/logger';
import {ActivatedRoute, Router} from '@angular/router';
import {Reponse} from '../models/reponse';
import {ReponsesService} from '../services/reponses.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question: Question = <Question>{};
  questions: Question[] = [];
  reponses: Reponse[] = [];
  laReponse: Reponse = <Reponse>{};
  loading: boolean = false;
  arraySelPoivre: Observable<any>[] = [];
  arrayNuggets: Observable<any>[] = [];
  array: Object[] = [];

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute, private reponsesService: ReponsesService, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loading = true;
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.questionsService.getQuestion(id).subscribe(question => {
      this.question = question;
      this.reponsesService.getReponses(id).subscribe(reponses => {
        this.reponses = reponses;
      });
    });
    this.questionsService.getQuestions().subscribe(question => {
      question.forEach(element => {
        this.questions.push(element);
      });
    });
    this.loading = false;
  }

  getChoixJoueur(reponse: Reponse) {
    this.reponses.forEach(x =>{
      if(x.bonne_reponse)
        this.laReponse = x;
    });
    console.log(reponse === this.laReponse);
    if(reponse === this.laReponse){
      this.router.navigate(['question/'+this.question.id_question++]);
      return reponse === this.laReponse
    }
    this.router.navigate(['question/'+this.question.id_question++]);
    return reponse === this.laReponse
  }

  getRandomint(max: number){
    var arr = [];
    while(arr.length < max){
      var r = Math.floor(Math.random() * 100) + 1;

      if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  }


}
