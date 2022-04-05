import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {QuestionsComponent} from "./questions/questions.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import { QuizzComponent } from './quizz/quizz.component';
import {ClassementComponent} from './classement/classement.component';
import {RegistrationComponent} from "./registration/registration.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";
import {PhotoComponent} from "./photo/photo.component";

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'question/:poivre/:nugget', component:QuestionsComponent},
  {path: 'quizz', component:QuizzComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'classement', component:ClassementComponent},
  {path: 'formulaire/:id',component:FormulaireComponent},
  {path: 'profil/:id',component:PhotoComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
