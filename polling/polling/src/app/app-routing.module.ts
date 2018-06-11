import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogRegComponent } from './log-reg/log-reg.component';
import { PollsComponent } from './polls/polls.component';
import { PollsAllComponent } from './polls/polls-all/polls-all.component';
import { PollCreateComponent } from './polls/poll-create/poll-create.component';
import { PollViewComponent } from './polls/poll-view/poll-view.component';

const routes: Routes = [
  {path: '', component: LogRegComponent},
  {path: 'polls', component: PollsComponent, children:[
    {path: '', component: PollsAllComponent},
    {path: 'create', component: PollCreateComponent},
    {path: 'poll/:pollId', component: PollViewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
