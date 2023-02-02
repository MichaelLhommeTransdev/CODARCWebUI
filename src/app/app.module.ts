import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Setup DateFns as date adapter
import { MatDateFnsModule } from '@angular/material-date-fns-adapter';
import { fr } from 'date-fns/locale';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatDateFnsModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: fr },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
