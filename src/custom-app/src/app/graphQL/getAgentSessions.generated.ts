import type * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type GetAgentSessionsQueryVariables = Exact<{
  first?: number | null | undefined;
}>;


export type GetAgentSessionsQuery = { runtime: { __typename: 'RuntimeModelQuery', GetAgentSessions: { __typename: 'SystemAiAiAgentSessionConnection', edges: Array<{ __typename: 'SystemAiAiAgentSessionEdge', node: { __typename: 'SystemAiAiAgentSession', rtId: string, status: Types.SystemAiSessionStatus, startedAt: any, completedAt: any, jobKind: Types.SystemAiJobKind | null, goalSummary: string } | null } | null> | null } | null } | null };

export const GetAgentSessionsDocument = gql`
    query GetAgentSessions($first: Int) {
  runtime {
    GetAgentSessions: systemAiAiAgentSession(first: $first) {
      edges {
        node {
          rtId
          status
          startedAt
          completedAt
          jobKind
          goalSummary
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAgentSessionsGQL extends Apollo.Query<GetAgentSessionsQuery, GetAgentSessionsQueryVariables> {
    document = GetAgentSessionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }