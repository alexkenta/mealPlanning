import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { PollsComponent } from './polls/polls.component';
import { PollCreateComponent } from './polls/poll-create/poll-create.component';
import { PollViewComponent } from './polls/poll-view/poll-view.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { AuthService } from './auth.service';
import { PollsService } from './polls.service';
import { PollsAllComponent } from './polls/polls-all/polls-all.component';

@NgModule({
  declarations: [
    AppComponent,
    LogRegComponent,
    PollsComponent,
    PollCreateComponent,
    PollViewComponent,
    PollsAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CookieModule.forRoot(),
  ],
  providers: [AuthService, PollsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
