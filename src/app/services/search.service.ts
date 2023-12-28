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
      query SearchRecipesInFields($searchTerm: String!) {
        searchRecipesInFields(searchTerm: $searchTerm) {
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
      }`, variables: {
      searchTerm: searchTerm,
    },
    }).pipe(tap(
      console.log));
  }

  recipesByCategory(category : string){
    return this.apollo
    .query({
      query: gql`
      query recipesByCategory($category: String!){
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
    `
    }) .pipe(tap(
      console.log));
  }

  sortRecipesByRating(){
    return this.apollo
    .query({
      query: gql`
      query sortByRating{
        sortRecipesByRating {
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
    `
    }) .pipe(tap(
      console.log));
  }
  sortRecipesByDate(){
    return this.apollo
    .query({
      query: gql`
      query sortRecipesByDate {
        sortRecipesByDate {
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
    `
    }) .pipe(tap(
      console.log));
  }

  getLatestRecipe(){

    return this.apollo
    .query({
      query: gql`
      query {
        getLatestRecipe {
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
    `
    }) .pipe(tap(
      console.log));
  }

  getFuzzyResults(title : String){
    return this.apollo
    .query({
      query: gql`
      query GetFuzzyResults($title: String!) {
        recipesFuzzySearch(title: $title) {
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
          user {
            id
            firstName 
            lastName 
            email
            createdAt
          }
        }
      }`, variables: {
      title: title ,
    },
    }) .pipe(tap(
      console.log));
  }

  recipesCreatedAfterDate(date : string){
    return this.apollo
    .query({
      query: gql`
      query recipesCreatedAfterDate($date : String!){
        recipesCreatedAfterDate (date: $date) {
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
    `,variables: {
      date: date,
  },
    }) .pipe(tap(
      console.log));
  }
}
