import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcumbsComponent} from './breadcumbs/breadcumbs.component';
import {HeaderPageComponent} from './header-page/header-page.component';
import {SideBarComponent} from './side-bar/side-bar.component';

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
    CommonModule
  ]
})
export class SharedModule { }
