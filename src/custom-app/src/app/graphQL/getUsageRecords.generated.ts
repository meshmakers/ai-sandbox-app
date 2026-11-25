import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type GetUsageRecordsQueryVariables = Exact<{
  first?: number | null | undefined;
}>;


export type GetUsageRecordsQuery = { runtime: { __typename: 'RuntimeModelQuery', systemAiAiUsageRecord: { __typename: 'SystemAiAiUsageRecordConnection', edges: Array<{ __typename: 'SystemAiAiUsageRecordEdge', node: { __typename: 'SystemAiAiUsageRecord', rtId: string, at: any, model: string, inputTokens: number, outputTokens: number, costCents: any } | null } | null> | null } | null } | null };

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