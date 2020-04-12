import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcumbsComponent} from './breadcumbs/breadcumbs.component';
import {HeaderPageComponent} from './header-page/header-page.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BreadcumbsComponent,
    HeaderPageComponent,
    SideBarComponent
  ],
  exports: [
    BreadcumbsComponent,
    HeaderPageComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
