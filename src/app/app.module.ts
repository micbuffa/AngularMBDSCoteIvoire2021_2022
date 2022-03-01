import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule }  from '@angular/material/button';
import { MatDividerModule }  from '@angular/material/divider';
import { MatIconModule }  from '@angular/material/icon';
import { MatInputModule }  from '@angular/material/input';
import { MatListModule }  from '@angular/material/list';
import { MatCardModule }  from '@angular/material/card';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms'

import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    FormsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule,
    MatListModule, MatCardModule, MatCheckboxModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }