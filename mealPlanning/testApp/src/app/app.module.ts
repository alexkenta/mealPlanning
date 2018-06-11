import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MealPlanningService } from './meal-planning.service';
import { CookieModule } from 'ngx-cookie'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PlansComponent } from './plans/plans.component';
import { ViewRecipeComponent } from './recipes/view-recipe/view-recipe.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    PlansComponent,
    ViewRecipeComponent,
    AddRecipeComponent,
    LogRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CookieModule.forRoot()
  ],
  providers: [MealPlanningService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
