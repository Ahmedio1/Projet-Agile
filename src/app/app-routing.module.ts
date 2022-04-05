import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {QuestionsComponent} from "./questions/questions.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {CountDownComponent} from './count-down/count-down.component';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {PhotoComponent} from './photo/photo.component';
import {ChronometreComponent} from './chronometre/chronometre.component';


const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'question/:id', component:QuestionsComponent},
  {path:'count-down', component:CountDownComponent},
  {path:'formulaire/:id',component:FormulaireComponent},
  {path:'photo/:id',component:PhotoComponent},
  {path:'chrono',component:ChronometreComponent},
  {path: '**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
