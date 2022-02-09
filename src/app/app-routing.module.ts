import { PolishNightsComponent } from './polish-nights/polish-nights.component';
import { AlphabetsComponent } from './alphabets/alphabets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {path:'home', component :HomeComponent},
  {path:'alphabets',component:AlphabetsComponent},
  {path:'polishNights',component:PolishNightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
