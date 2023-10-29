import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { VideoslinkComponent } from './videoslink/videoslink.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'videos', component: VideoslinkComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      enableTracing: true, useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
