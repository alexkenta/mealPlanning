import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { AuthService } from '../../auth.service';
import { PollsService } from '../../polls.service'

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent implements OnInit {

  thisUser = null;
  currentUser = null;

  newPoll:any = {
    question: '',
    optOne: '',
    optTwo: '',
    optThree: '',
    optFour: '',
    createdBy: null
  }

  constructor(private cookieService: CookieService,
              private authservice: AuthService,
              private pollsservice: PollsService) {

                this.thisUser = this.cookieService.get('userID')

    if(this.thisUser){
      this.authservice.getUser(this.thisUser)
      .subscribe(
      (response) => {
        console.log("NGONINIT plan component", response)
        this.currentUser = response
        this.newPoll.createdBy = this.currentUser.name
      },
      (err) => {
        console.log("error in subscribe on init", err)
      }
      ) 
    }
               }

  ngOnInit() {
    
    
  }

  createPoll(){

    console.log("create poll")
    console.log("this user",this.thisUser)
    console.log("current user", this.currentUser)
    console.log(this.newPoll)

    this.pollsservice.createPoll(this.newPoll)
    .subscribe(
      (response) => {
        console.log("NGONINIT plan component", response)
        this.currentUser = response
      },
      (err) => {
        console.log("error in subscribe on init", err)
      }
      ) 

   this.newPoll = {
     question: '',
     optOne: '',
     optTwo: '',
     optThree: '',
     optFour: '',

   }


  }

    
}
