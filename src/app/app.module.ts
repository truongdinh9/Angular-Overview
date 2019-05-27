import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { ChangeColorComponent } from './change-color/change-color.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    ChangeColorComponent,
    CaculatorComponent,
    AsyncAwaitComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
