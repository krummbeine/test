import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuritiesListComponent } from './components/securities-list/securities-list.component';

const routes: Routes = [
  { path: '**', component: SecuritiesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
