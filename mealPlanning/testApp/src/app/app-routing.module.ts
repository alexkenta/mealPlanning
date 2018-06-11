import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlansComponent } from '../app/plans/plans.component'
import { RecipesComponent } from '../app/recipes/recipes.component'
import { AddRecipeComponent } from '../app/recipes/add-recipe/add-recipe.component';
import { ViewRecipeComponent } from '../app/recipes/view-recipe/view-recipe.component';
import { LogRegComponent } from '../app/log-reg/log-reg.component'

const routes: Routes = [
  {path: '', component: LogRegComponent},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: AddRecipeComponent},
    {path: 'add', component: AddRecipeComponent},
    {path: 'view/:id', component: ViewRecipeComponent}
  ]},
  {path: 'plans', component: PlansComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
