import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';
import { PracticeComponent } from './components/practice/practice.component';
import { StorageService } from './services/storage.service';

const appRoutes: Routes = [
  { path: 'new', component: NewComponent },
  { path: 'list',component: ListComponent },
  { path: 'practice',component: PracticeComponent },
  { path: '',redirectTo: '/new', pathMatch: 'full'},//nothing in the route
  
    
];
@NgModule({
  declarations: [
    AppComponent,ListComponent, NewComponent, PracticeComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers:[StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
