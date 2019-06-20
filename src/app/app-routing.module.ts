import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'score',
        loadChildren: () => import ('./scoreboard/scoreboard.module').then(mod => mod.ScoreboardModule)
    }/*,
    {
        path: '**',
        redirectTo: 'score'
    }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
