import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpHeaders } from '@angular/common/http';

const uri = 'http://localhost:8080/graphql';
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      const http = httpLink.create({ uri });
      const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null;
      const middleware = new ApolloLink((operation, forward) => {
        operation.setContext({
          headers: new HttpHeaders().set(
            'Authorization',
            `Bearer ${token || null}`,
          ),
        });
        return forward(operation);
      });

      const link = middleware.concat(http);

      return {
        link,
        cache: new InMemoryCache(),
      };
    },
    deps: [HttpLink],
  },
];
