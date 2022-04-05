import { Component, OnInit } from '@angular/core';
import {Question} from '../models/question';
import {Reponse} from '../models/reponse';
import {Photo} from '../models/Photo';
import {QuestionsService} from '../services/questions.service';
import {ActivatedRoute} from '@angular/router';
import {ReponsesService} from '../services/reponses.service';
import {PhotoService} from '../services/photo.service';

@Component({
  selector: 'app-photo',
  template: `
    <p>
      <ng-container *ngIf="loading">
        <mat-spinner></mat-spinner>
      </ng-container>

      <mat-card *ngIf="!loading" style="text-align: center">
        <mat-card-title> L'avatar   <img alt="profil" src="{{ photo.avatar_url }}"></mat-card-title>
      </mat-card>

    </p>
  `,
  styles: [
  ]
})
export class PhotoComponent implements OnInit {
  photo: Photo = <Photo>{};
  reponses: Reponse[] = [];
  loading: boolean = false;

  constructor(private photoService: PhotoService, private route: ActivatedRoute, private reponsesService: ReponsesService) { }

  ngOnInit(): void {
    this.loading = true;
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.photoService.getPhoto(id).subscribe(photo => {
      this.photo = photo;
      this.reponsesService.getReponses(id).subscribe(reponses => {
        this.reponses = reponses;
        this.loading = false;
      });
    });


  }

}
