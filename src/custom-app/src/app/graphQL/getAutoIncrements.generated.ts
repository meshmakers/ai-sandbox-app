import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

export type GetAutoIncrementsQueryVariables = Exact<{ [key: string]: never; }>;

export type GetAutoIncrementsQuery = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', systemAutoIncrement?: { __typename?: 'SystemAutoIncrementConnection', edges?: Array<{ __typename?: 'SystemAutoIncrementEdge', node?: { __typename?: 'SystemAutoIncrement', rtId: string, rtWellKnownName?: string | null, currentValue: number } | null } | null> | null } | null } | null };

export const GetAutoIncrementsDocument = gql`
    query GetAutoIncrements {
  runtime {
    systemAutoIncrement {
      edges {
        node {
          rtId
          rtWellKnownName
          currentValue
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAutoIncrementsGQL extends Apollo.Query<GetAutoIncrementsQuery, GetAutoIncrementsQueryVariables> {
    document = GetAutoIncrementsDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
