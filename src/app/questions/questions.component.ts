import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Question} from '../models/question';
import {QuestionsService} from '../services/questions.service';
import {logger} from "codelyzer/util/logger";
import {ActivatedRoute} from '@angular/router';
import {Reponse} from '../models/reponse';
import {ReponsesService} from '../services/reponses.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

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
  arraySelPoivre: Question[] = [];
  arrayNuggets: Question[] = [];
  arrayRandomSelPoivre: Object[] = [];
  arrayRandomNuggets: Object[] = [];
  array: Question[] = [];

  val: number = 0;
  poivre: number = 0;
  nugget: number = 0;
  miam: number = 0;
  static poivre: number;
  static nugget: number;
  static miam: number;

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute, private reponsesService: ReponsesService) { }

  ngOnInit(): void {
    this.loading = true;
    this.questionsService.getQuestions().subscribe(question => {
      question.forEach(element => {
        this.questions.push(element);
      });
      this.nugget = + (this.route.snapshot.paramMap.get('nugget') || 0);
      this.poivre = + (this.route.snapshot.paramMap.get('poivre') || 0);
      this.getPoivre();
      this.getNuggets();
      this.showArray();
      this.loading = false;
      console.log(this.array[this.val].id_question);
      this.question = this.array[this.val];
      this.reponsesService.getReponses(this.question.id_question).subscribe(reponse => {
        this.reponses = reponse;
      });
    });
  }

  getChoixJoueur(reponse: Reponse) {
    this.val += 1;
    this.question = this.array[this.val];
    this.reponsesService.getReponses(this.question.id_question).subscribe(reponse => {
      this.reponses = reponse;
    });
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

  getRandomint(max: number){
    var arr = [];
    while(arr.length < max){
        var r = Math.floor(Math.random() * 100) + 1;

        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  }

  //get random questions with id_categorie equal to 2 and push the data in array and console.log it
  getPoivre(){
    this.questions.forEach(element => {
      if(element.id_catetgorie == 2){
        this.arraySelPoivre.push(element);
      }
    });
    this.getRandomPoivre();
  }

  //get random questions with id_categorie equal to 1 and push the data in array and console.log it
  getNuggets(){
    this.questions.forEach(element => {
      if(element.id_catetgorie == 1){
        this.arrayNuggets.push(element);
      }
    });
    this.getRandomNuggets();
  }

  getRandomPoivre(){

    //shuffle the array arraySelPoivre and push this.poivre element in array
    this.arraySelPoivre.sort(() => Math.random() - 0.5);
    for(var i = 0; i < this.poivre; i++){
      this.array.push(this.arraySelPoivre[i]);
    }
  }

  getRandomNuggets(){

    this.arrayNuggets.sort(() => Math.random() - 0.5);
    for(var i = 0; i < this.nugget; i++){
      this.array.push(this.arrayNuggets[i]);
    }

  }

  //log all the data in arraynuggets and arrayselpoivre
  showArray(){
    console.log(this.array);
  }



}
