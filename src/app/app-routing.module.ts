import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './aplication/login/login.component';
import {PagesComponent} from './pages/pages.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {
    path: '',
    component: PagesComponent,
    loadChildren: './pages/pages.module#PagesModule' // ruta al módulo y nombre del módulo
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
