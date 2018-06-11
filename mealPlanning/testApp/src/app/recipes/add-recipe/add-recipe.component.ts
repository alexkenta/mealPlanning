import { Component, OnInit } from '@angular/core';
import { MealPlanningService } from '../../meal-planning.service'
import { Router, ActivatedRoute } from '@angular/router'
import { CookieService } from 'ngx-cookie'


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  thisUser = null;
  currentUser = null;
  
  newRecipe: any = {
    name: '',
    ingredients: '',
    difficulty: null,
    method: '',
  }

  constructor(private mealPlanningService: MealPlanningService, 
              private route: ActivatedRoute,
              private cookieService: CookieService,
              private router: Router) {
      this.thisUser = this.cookieService.get('userID')

      if(this.thisUser){
        this.mealPlanningService.getUser(this.thisUser)
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
               }

  addNewRecipe(){
    console.log("ADD RECIPE COMPONENT > clicking")
    this.mealPlanningService.addNewRecipe(this.newRecipe)
    .subscribe(
      (res) => {
        console.log("ARCOMP > ", res)
        this.mealPlanningService.getAllRecipes()
      },
      (err) => {
        console.log("error", err)
      }
    )
  
    this.newRecipe = {
      name: '',
      ingredients: '',
      difficulty: null,
      method: ''
    }
    this.router.navigate(['/recipes'])
  }

  ngOnInit() {
  }

}
