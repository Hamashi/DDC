import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { VignettesComponent } from './vignettes/vignettes.component';
import { ModaleComponent } from './modale/modale.component';

import { KonamiModule } from 'ngx-konami';

@NgModule({
  declarations: [
    AppComponent,
    VignettesComponent,
    ModaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    KonamiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
