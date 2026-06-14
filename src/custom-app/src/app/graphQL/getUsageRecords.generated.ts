import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetUsageRecordsQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetUsageRecordsQuery = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', systemAiAiUsageRecord?: { __typename?: 'SystemAiAiUsageRecordConnection', edges?: Array<{ __typename?: 'SystemAiAiUsageRecordEdge', node?: { __typename?: 'SystemAiAiUsageRecord', rtId: string, at: any, model: string, inputTokens: number, outputTokens: number, costCents: any } | null } | null> | null } | null } | null };

export const GetUsageRecordsDocument = gql`
    query GetUsageRecords($first: Int) {
  runtime {
    systemAiAiUsageRecord(first: $first) {
      edges {
        node {
          rtId
          at
          model
          inputTokens
          outputTokens
          costCents
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUsageRecordsGQL extends Apollo.Query<GetUsageRecordsQuery, GetUsageRecordsQueryVariables> {
    document = GetUsageRecordsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }