import { Component } from '@angular/core';
import { Recipe } from './model/Recipe';
import { RecipeServiceService } from './recipe-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Recipe-Managment';
  recipe:Recipe;
  result:string;
  flag:boolean;
  recipeArr:Recipe[]


  constructor(private service:RecipeServiceService){
    this.recipe= new Recipe();
    this.result="";
    this.recipeArr=[];
    this.flag=false;
  }

  oncreate(data:any){
    this.recipe.id=data.rid;
    this.recipe.name=data.rname;
    this.recipe.origin=data.rorigin;
    this.recipe.url=data.rurl;

    this.result = this.service.oncreate(this.recipe);
  }

  onupdate(data:any){
    this.recipe.id=data.rid;
    this.recipe.name= data.rname;
    this.recipe.origin = data.rorogin;
    this.recipe.url = data.rurl;

    this.result = this.service.onupdate(this.recipe);

  }

  ondelete(data:any){
    this.result=this.service.ondelete(data.rid);
  }

  findRecipe(data:any){
    this.recipe = this.service.findRecipe(data.rid);
    this.result = this.recipe.id+" "+this.recipe.name + " " + this.recipe.origin + " " + this.recipe.url;

  }

  findAllRecipe(){
    this.recipeArr = this.service.findAllRecipe();
    this.flag=true;
  }
}

