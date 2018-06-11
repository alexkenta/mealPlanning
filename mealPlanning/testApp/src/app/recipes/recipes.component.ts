import { Component, OnInit } from '@angular/core';
import { MealPlanningService } from '../meal-planning.service'


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  allRecipes:any = []

  constructor(private mealPlanningService: MealPlanningService
  ) {
    this.mealPlanningService.subject.subscribe(
      (recipes) => {
        this.allRecipes = recipes;
      }
    )
   }

  ngOnInit() {
    this.mealPlanningService.getAllRecipes()
   
  }

}
