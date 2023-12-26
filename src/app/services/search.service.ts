import { Injectable, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apollo: Apollo = inject(Apollo)
  constructor() { }

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
    })
  }
}
