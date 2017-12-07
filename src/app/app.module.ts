import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VignettesComponent } from './vignettes/vignettes.component';
import { ModaleComponent } from './modale/modale.component';


@NgModule({
  declarations: [
    AppComponent,
    VignettesComponent,
    ModaleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
