import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [{
    id:'r1',
    title:'schnitzel',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/330px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
    ingredients:['Potato wedges','Meat','Salad']
  },
  {
    id:'r2',
    title:'schnitzel2',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/330px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
    ingredients:['Chilly potatos','chicken','Rice']
  },
  {
    id:'r3',
    title:'schnitzel3',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/330px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
    ingredients:['Potato','Soya','Salad']
  }];
  constructor() { }

  getAllRecipes(){
    //console.log(this.recipes);
    //console.log([...this.recipes]);
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId
    })};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(test =>{
      return test.id !== recipeId;
    });
  }
}
