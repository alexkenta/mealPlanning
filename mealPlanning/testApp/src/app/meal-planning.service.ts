import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealPlanningService {

  subject:any = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }
  
  getAllRecipes(){
    this.http.get('/allRecipes')
    .subscribe(
      (response) => {
        console.log("success", response);
        this.subject.next(response);
      },
      (err) => {
        console.log("error")
      }
    )
  }

  addToPlan(recipeId, dayOfWeek, userId){
    console.log("MP Service > add to plan > recipeId, dow, uId", recipeId, dayOfWeek, userId)
    return this.http.put('/addPlan/'+recipeId+'/'+dayOfWeek+'/'+userId, recipeId, dayOfWeek)
  }

  removeFromPlan(user, day){
    console.log("MP Service > removeFromPlan")
    return this.http.put('/removeFromPlan/'+user+'/'+day, day)
  }

  getOneRecipe(id){
    console.log("get one recipe", id)
    return this.http.get('/getOneRecipe/'+id)
  }

  addNewRecipe(recipe){
    console.log("hitting SERVICE > ADD NEW RECIPE")
    return this.http.post('/addNewRecipe', recipe)  
  }

  getUser(userID){
    console.log("MEAL SERVICE > userId", userID)
    return this.http.get('/thisUser/'+userID)
  }
}