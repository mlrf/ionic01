import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] =[
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://media.wired.com/photos/5b8999943667562d3024c321/master/w_2560%2Cc_limit/trash2-01.jpg',
      ingredients: ['French Fries','Pork Meat','Salad']
    },
    {
      id: 'r2',
      title: 'Hamburguer',
      imageUrl: 'https://portal.minervafoods.com/files/styles/blog_post_page/public/como_fazer_hamburguer_caseiro.jpg?itok=s50ral-Y',
      ingredients: ['Mostard',' Meat','Onion']
    }
  ];
  constructor() { }


  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }
}
