import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/new',
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: NewGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
