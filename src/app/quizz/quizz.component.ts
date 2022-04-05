import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  poivre: number = 0;
  nugget: number = 0;
  miam: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
