import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: 'child', component: ChildComponent},
  { path: '', pathMatch: 'full', redirectTo: '/child' },
  { path: '**', component: ChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
