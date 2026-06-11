import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

export type GetSystemUsersQueryVariables = Exact<{ [key: string]: never; }>;

export type GetSystemUsersQuery = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', user?: { __typename?: 'UserConnection', edges?: Array<{ __typename?: 'UserEdge', node?: { __typename?: 'User', rtId: string, userName?: string | null, email?: string | null } | null } | null> | null } | null } | null };

export const GetSystemUsersDocument = gql`
    query GetSystemUsers {
  runtime {
    user(first: 100) {
      edges {
        node {
          rtId
          userName
          email
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSystemUsersGQL extends Apollo.Query<GetSystemUsersQuery, GetSystemUsersQueryVariables> {
    document = GetSystemUsersDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
