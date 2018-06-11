import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealPlanningService } from '../../meal-planning.service';
import { CookieService } from 'ngx-cookie'

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  id = null;
  thisRecipe 
  dayOfWeek
  thisUser = null;
  currentUser = null;

  constructor(private route: ActivatedRoute,
              private mealPlanService: MealPlanningService,
              private cookieService: CookieService,
              private router: Router) {

      this.thisUser = this.cookieService.get('userID')
      if(this.thisUser){
        this.mealPlanService.getUser(this.thisUser)
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


      this.route.paramMap.subscribe(
      params => {
        console.log("from params in constructor", params.get('id'));
        this.mealPlanService.getOneRecipe(params.get('id'))
        .subscribe(recipeReturned =>{
          this.thisRecipe = recipeReturned
        })
        this.id = params.get('id')
      }
    )
   }

  addToPlan(){
    console.log("adding ", this.thisRecipe.name, " to ", this.dayOfWeek, " for ",this.currentUser.email )
    this.mealPlanService.addToPlan(this.thisRecipe._id, this.dayOfWeek, this.currentUser._id)
    .subscribe(
      (response) => {
        this.router.navigateByUrl('plans');
      },
      (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit() {
    console.log("View Recipe comp", this.id)
    this.mealPlanService.getOneRecipe(this.id)
    .subscribe(
      (response) => {
        console.log("NGONINIT VIEW RECIPE", response)
        this.thisRecipe = response
      },
      (err) => {
        console.log("error in subscribe on init", err)
      }
    )   
  }

}
