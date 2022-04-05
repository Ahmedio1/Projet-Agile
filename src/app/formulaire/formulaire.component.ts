import { Component, OnInit } from '@angular/core';
import {Theme} from '../models/Theme';
import {FormulaireService} from '../services/formulaire.service';
import {Reponse} from '../models/reponse';
import {ActivatedRoute} from '@angular/router';
import {ReponsesService} from '../services/reponses.service';

@Component({
  selector: 'app-formulaire',
  template: `
    <ng-container *ngIf="loading">
      <mat-spinner></mat-spinner>
    </ng-container>

    <mat-card *ngIf="!loading" style="text-align: center">
      <mat-card-title>Le thème  {{ theme.id_theme }} :</mat-card-title>
      <mat-card-content>
        {{ theme.libelle }}
      </mat-card-content>
    </mat-card>

  `,
  styles: [`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #f5f6f7;
    font-family: "Nunito", sans-serif;
  }

  main {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
  .stepper {
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5%;
  }

  .step--1,
  .step--2,
  .step--3,
  .step--4 {
    width: 5rem;
    padding: 0.5rem 0;
    background: #fff;
    color: #666;
    text-align: center;
  }
  .step--1,
  .step--2,
  .step--3 {
    border-right: 1px solid #666;
  }
  .form {
    background: #fff;
    text-align: center;
    position: absolute;
    width: 25rem;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(51, 51, 51, 0.2);
    display: none;
    border-radius: 1rem;
    overflow: hidden;
  }
  .form--header-container {
    background: linear-gradient(to right, rgb(51, 51, 51), #919191);
    color: #fff;
    height: 6rem;
    padding: 1rem 0;
    margin-bottom: 2rem;
  }

  .form--header-title {
    font-size: 1.4rem;
  }

  .form--header-text {
    padding: 0.5rem 0;
  }

  input[type="text"] {
    padding: 0.8rem;
    margin: auto;
    margin-top: 0.5rem;
    width: 20rem;
    display: block;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid #bdbdbb;
  }

  .form__btn {
    background: #333;
    color: #fff;
    outline: none;
    border: none;
    padding: 0.5rem 0.7rem;
    width: 7rem;
    margin: 1rem auto;
    border-radius: 0.9rem;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
  }
  .form--message-text {
    width: 25rem;
    background: #fff;
    color: #444;
    padding: 2rem 1rem;
    text-align: center;
    font-size: 1.4rem;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(51, 51, 51, 0.2);
    animation: fadeIn 0.8s;
    border-radius: 1rem;
  }
  .form-active {
    z-index: 1000;
    display: block;
  }
  .form-active-animate {
    animation: moveRight 1s;
  }
  .form-inactive {
    display: block;
    animation: moveLeft 1s;
  }

  .step-active {
    background: #666;
    color: #fff;
    border: 1px solid #666;
  }
  @keyframes moveRight {
    0% {
      transform: translateX(-27rem) scale(0.9);
      opacity: 0;
    }
    100% {
      transform: translateX(0rem) scale(1);
      opacity: 1;
    }
  }

  @keyframes moveLeft {
    0% {
      transform: translateX(0rem) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateX(27rem) scale(0.9);
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  `

  ]
})
export class FormulaireComponent implements OnInit {
  theme: Theme= <Theme> {};
  loading: boolean = false;

  constructor(private formulaire: FormulaireService, private route: ActivatedRoute, private reponsesService: ReponsesService) {
  }

  ngOnInit(): void {
    this.loading = true;
    const id: number = +(this.route.snapshot.paramMap.get('id') || 6);
    this.formulaire.getFormulaire(id).subscribe(theme => {
      this.theme = theme;
    });
    this.loading = false;
  }

}
