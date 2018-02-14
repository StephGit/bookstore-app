import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './details.component';


const routes: Routes = [
  {
    path: ':isbn',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule { }
