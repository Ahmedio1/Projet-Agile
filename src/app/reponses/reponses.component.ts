import {Component, Input, OnInit} from '@angular/core';
import {Reponse} from '../models/reponse';

@Component({
  selector: 'app-reponses',
  templateUrl: './reponses.component.html',
  styleUrls: ['./reponses.component.css']
})
export class ReponsesComponent implements OnInit {
  @Input() reponse: Reponse = {} as Reponse;

  constructor() { }

  ngOnInit(): void {
  }

}
