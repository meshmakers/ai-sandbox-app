import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

export type GetSystemUserQueryVariables = Exact<{ rtId: string }>;

export type GetSystemUserQuery = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', user?: { __typename?: 'UserConnection', edges?: Array<{ __typename?: 'UserEdge', node?: { __typename?: 'User', rtId: string, userName?: string | null, email?: string | null } | null } | null> | null } | null } | null };

export const GetSystemUserDocument = gql`
    query GetSystemUser($rtId: String!) {
  runtime {
    user(first: 1, rtId: $rtId) {
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
  export class GetSystemUserGQL extends Apollo.Query<GetSystemUserQuery, GetSystemUserQueryVariables> {
    document = GetSystemUserDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
