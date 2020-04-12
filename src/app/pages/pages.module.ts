import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimelineComponent} from './timeline/timeline.component';
import {NewThreadComponent} from './threads/new-thread/new-thread.component';
import {ListThreadsComponent} from './threads/list-threads/list-threads.component';
import {PagesRoutingModule} from './pages-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    TimelineComponent,
    NewThreadComponent,
    ListThreadsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
