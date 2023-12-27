import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { Apollo, gql } from 'apollo-angular';
import { RecipeInput } from '../interfaces/RecipeInput';


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
  submitRecipe = gql`
  mutation addRecipe(
    $recipe: RecipeInput!
  ) {
    book(title: $title, authors: $authors, pages: $pages, chapters: $chapters) {
      id
    }
  }
`;

  addRecipe(recipe: RecipeInput) {
    return this.apollo
      .mutate({
        mutation: gql`
        mutation addRecipe($recipeInput: RecipeInput!) {
            id
            title
            description
            picture
            rating
            user {
              id
              firstName
              lastName
              email
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
