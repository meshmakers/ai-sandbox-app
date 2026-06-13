import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetAgentSessionsQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetAgentSessionsQuery = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', GetAgentSessions?: { __typename?: 'SystemAiAiAgentSessionConnection', edges?: Array<{ __typename?: 'SystemAiAiAgentSessionEdge', node?: { __typename?: 'SystemAiAiAgentSession', rtId: string, status: Types.SystemAiSessionStatus, startedAt: any, completedAt?: any | null, jobKind?: Types.SystemAiJobKind | null, goalSummary: string } | null } | null> | null } | null } | null };

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