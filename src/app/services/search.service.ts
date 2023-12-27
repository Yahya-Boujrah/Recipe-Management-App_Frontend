import { Injectable, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apollo: Apollo = inject(Apollo)
  constructor() { }


  searchInFields(searchTerm : string){
    return this.apollo
    .query({
      query: gql`
      query {
        searchRecipesInFields(searchTerm: $searchTerm) {
          Recipe
        }
      }
    `, variables: {
      searchTerm: searchTerm,
    },
    }).pipe(tap(
      console.log));
  }

  recipesByCategory(category : string){
    return this.apollo
    .query({
      query: gql`
      query {
        recipesByCategory(category: $category) {
          id
          title
            description
            picture
            createdAt
            rating
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
    `, variables: {
        category: category,
    },
    }) .pipe(tap(
      console.log));
  }

  top6RatedRecipes(){
    return this.apollo
    .query({
      query: gql`
      query {
        top6RatedRecipes {
          id
          title
            description
            picture
            createdAt
            rating
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
      }
    `
    }) .pipe(tap(
      console.log));
  }

  sortRecipesByDate(){
    return this.apollo
    .query({
      query: gql`
      query {
        top6RatedRecipes {
          id
          title
            description
            picture
            createdAt
            rating
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
      }
    `
    }) .pipe(tap(
      console.log));
  }
}
