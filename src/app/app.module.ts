import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReponsesComponent } from './reponses/reponses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { FormsModule } from '@angular/forms';
import { QuizzComponent } from './quizz/quizz.component';
import { ClassementComponent } from './classement/classement.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {RegistrationComponent} from "./registration/registration.component";
import {MatButtonModule} from "@angular/material/button";
import {FormulaireComponent} from "./formulaire/formulaire.component";
import {PhotoComponent} from "./photo/photo.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuestionsComponent,
    ReponsesComponent,
    NotFoundComponent,
    QuizzComponent,
    ClassementComponent,
    RegistrationComponent,
    FormulaireComponent,
    PhotoComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatGridListModule,
        MatCardModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatTabsModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
