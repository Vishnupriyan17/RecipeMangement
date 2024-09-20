import { Injectable } from '@angular/core';
import { Recipe } from './model/Recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  wurl:string;
  recipeArr:Recipe[];
  recipe:Recipe;

  constructor(private http: HttpClient) {
    this.wurl="http://localhost:3000/recipes";
    this.recipe=new Recipe();
    this.recipeArr=[];
   }

   oncreate(recipe:Recipe){
    this.http.post<Recipe>(this.wurl,recipe).subscribe();
    return "Recipe Details Added"
   }

   onupdate(recipe:Recipe){
    this.http.put<Recipe>(this.wurl+"/"+recipe.id,recipe).subscribe();
    return "Recipe Details Updated";
   }

   ondelete(recipe:Recipe){
    this.http.delete<Recipe>(this.wurl+"/"+recipe).subscribe();
    return "Recipe Details Deleted";
   }

   findRecipe(rname:string){
    this.http.get<Recipe>(this.wurl+"/"+rname).subscribe(data => this.recipe = data);
    return this.recipe;
  }

  findAllRecipe(){
    this.http.get<Recipe[]>(this.wurl).subscribe(data => this.recipeArr = data);
    return this.recipeArr;
  }

}
