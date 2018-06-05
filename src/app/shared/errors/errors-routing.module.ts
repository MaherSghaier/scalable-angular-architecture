import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorsComponent } from './components/errors.component';

const routes: Routes = [
  { path: 'error', component: ErrorsComponent },
  { path: '**', component: ErrorsComponent, data: { error: 404 } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule {}
