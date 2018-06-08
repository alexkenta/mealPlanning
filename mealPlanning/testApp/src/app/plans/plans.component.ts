import { Component, OnInit } from '@angular/core';
import { MealPlanningService } from '../meal-planning.service'
import { CookieService } from 'ngx-cookie'



@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  currentUser = null
  thisUser = null
  tues = {}

  constructor(private mealPlanning: MealPlanningService,
              private cookieService: CookieService) { }

  ngOnInit() {
    console.log("session", this.cookieService.get('session'))
    console.log("userId", this.cookieService.get('userID'))
    
    this.thisUser = this.cookieService.get('userID')
    if(this.thisUser){
      this.mealPlanning.getUser(this.thisUser)
      .subscribe(
        (response) => {
          console.log("thisUser", this.thisUser)
          console.log("currentUser", this.currentUser)
          console.log("NGONINIT plan component", response)
          this.currentUser = response
        },
        (err) => {
          console.log("error in subscribe on init", err)
        }
      )

      // this.mealPlanning.getOneRecipe(this.currentUser.tues)
      // .subscribe((response) => {this.tues = response}
    // )
  }
  }

  removeFromPlan(day){
    console.log("remove this ", day, this.thisUser)
    this.mealPlanning.removeFromPlan(this.thisUser, day)
    .subscribe(
      (res) => {
        this.mealPlanning.getUser(this.thisUser)
    .subscribe(
      (response) => {
        console.log("NGONINIT plan component", response)
        this.currentUser = response
      },
      (err) => {
        console.log("error in subscribe on init", err)
      }
    )
      }
    )
    
  }

}
