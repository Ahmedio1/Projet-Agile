import {Component, OnInit, ViewChild} from '@angular/core';
import {QuestionsService} from '../services/questions.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ReponsesService} from '../services/reponses.service';
import {HttpClient} from '@angular/common/http';
import {ClassementService} from '../services/classement.service';
import {data} from 'autoprefixer';
import {of} from 'rxjs';
import {coerceStringArray} from '@angular/cdk/coercion';
import {element} from 'protractor';
import {filter} from 'rxjs/operators';
import {MatSort, Sort} from '@angular/material/sort';


@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  somme:number = 0;
  players:any[] = [];
  playersTeams:any[] = [];
  playersData:any[] = [this.players, this.playersTeams];

  dataSourcePlayers = this.classementService.getJoueurs();
  displayedColumnsPlayers: string[] = ['pseudo', 'score'];

  dataSourceTeams = this.classementService.getEquipes();
  displayedColumnsTeams: string[] = ['nom', 'score'];

  dataEquipesJoueurs = this.classementService.getEquipesJoueurs();

  allData = [this.dataSourcePlayers, this.dataSourceTeams, this.dataEquipesJoueurs];

  constructor(private classementService: ClassementService) { }

  sommePointsEquipes(id:number){
    this.playersData.forEach(x =>{ if (x.id_equipe == id) this.somme+=x.score});
    return this.somme;
  }

  trier(){
    this.players.sort();
  }

  ngOnInit(): void {
    this.classementService.getJoueurs().subscribe(joueurs => {
      joueurs.forEach(el => {
        this.players.push(el);
      });
    });
    this.classementService.getEquipesJoueurs().subscribe(joueurs => {
      joueurs.forEach(el => {
        this.playersTeams.push(el);
      });
    });
  }

}
