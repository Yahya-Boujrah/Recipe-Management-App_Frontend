import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { Apollo, gql } from 'apollo-angular';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apollo: Apollo = inject(Apollo)

  constructor() { }

  allRecipe() {
    return this.apollo
      .watchQuery({
        query: gql`
        query {
          allRecipes {
            id
            title
              description
              picture
              createdAt
            category {
              id
              name
            }
            ingredients {
              id
              name
              description
            }
            instructions {
              id
              number
              description
            }
            user{
              id
              firstName 
              lastName 
              email
              createdAt
            }
          }
        }
      `,
      })
  }

  addRecipe(recipe: Recipe) {
    return this.apollo
      .mutate({
        mutation: gql`
            addRecipe(recipeInput: $recipeInput) {
              id
              title
              description
              picture
              user {
                id
                firstName
                lastName
                email
                password
                createdAt
              }
              category {
                id
                name
              }
              ingredients {
                id
                name
                description
              }
              instructions {
                id
                number
                description
            }
        `,
        variables: {
          recipeInput: recipe,
        },
      })
      .pipe(tap(
        console.log));
  }

  deleteRecipe(recipeId: string) {
    return this.apollo
      .mutate({
        mutation: gql`
            deleteRecipe(id: $recipeId) {
              result
          }
        `,
        variables: {
          recipeId: recipeId,
        },
      })
      .pipe(tap(
        console.log));
  }
}
