import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlphabetsComponent } from './alphabets/alphabets.component';
import { PolishNightsComponent } from './polish-nights/polish-nights.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlphabetsComponent,
    PolishNightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
