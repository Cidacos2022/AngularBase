import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JbalvinComponent } from './jbalvin/jbalvin.component';

const routes: Routes = [

  {
    path: '',
    component: JbalvinComponent,
  },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
