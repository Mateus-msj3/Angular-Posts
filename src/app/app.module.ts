import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialLidtComponent } from './components/tutorial-lidt/tutorial-lidt.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialListComponent,
    TutorialLidtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
