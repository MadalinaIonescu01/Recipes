import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Pasta',
      imageUrl: 'https://static.toiimg.com/thumb/52759758.cms?imgsize=560987&width=800&height=800',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
    {
      id: 'r3',
      title: 'Soup',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz5s0jhwkJ7Vi9p8UVRbqiNCzEmecJU0GUaQ&usqp=CAU',
      ingredients: ['Small Onion', 'Bacon', 'Potatoes']
    },
    {
      id: 'r4',
      title: 'Salmon',
      imageUrl: 'https://149777215.v2.pressablecdn.com/wp-content/uploads/2007/09/shutterstock_248850307-1000x662.jpg',
      ingredients: ['Salmon', 'Lemon', 'Olive Oil']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => recipe.id === recipeId)
  };
  }

  deleteRecipes(recipeId: string){
      this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  };
}


