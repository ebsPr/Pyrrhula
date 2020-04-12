import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelineComponent} from './timeline/timeline.component';
import {NewThreadComponent} from './threads/new-thread/new-thread.component';
import {ListThreadsComponent} from './threads/list-threads/list-threads.component';

const routes: Routes = [
  { path: 'timeline', component: TimelineComponent},
  { path: 'thread/new', component: NewThreadComponent},
  { path: 'thread', component: ListThreadsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
