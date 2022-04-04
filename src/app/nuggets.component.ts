import { Component, OnInit } from '@angular/core';
import {Question} from "./models/question";
import {Reponse} from "./models/reponse";
import {QuestionsService} from "./services/questions.service";
import {ActivatedRoute} from "@angular/router";
import {ReponsesService} from "./services/reponses.service";

@Component({
  selector: 'app-nuggets',
  template: `
    <ng-container *ngIf="loading">
      <mat-spinner></mat-spinner>
    </ng-container>

    <mat-card *ngIf="!loading" style="text-align: center">
      <mat-card-title>La Question  {{ question.id_question }} :</mat-card-title>
      <mat-card-content>
        {{ question.libelle }}
      </mat-card-content>
    </mat-card>

    <mat-grid-list cols="2" rowHeight="2:1" *ngIf="!loading">
      <mat-grid-tile
        *ngFor="let reponse of reponses">
        <app-reponses [reponse]="reponse"></app-reponses>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [
  ]
})
export class NuggetsComponent implements OnInit {
  nuggets: Question[] = <Question[]>{};
  question: Question = <Question>{};
  reponses: Reponse[] = [];
  loading: boolean = false;

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute, private reponsesService: ReponsesService) { }

  ngOnInit(): void {
    this.loading = true;
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.questionsService.getNugget(id).subscribe(question => {
      this.question = question;
      this.reponsesService.getReponses(id).subscribe(reponses => {
        this.reponses = reponses;
        this.loading = false;
      });
    });
  }

}
