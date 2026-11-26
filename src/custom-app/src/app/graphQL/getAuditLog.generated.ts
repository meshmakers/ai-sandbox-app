import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type GetAuditLogQueryVariables = Exact<{
  first?: number | null | undefined;
}>;


export type GetAuditLogQuery = { runtime: { __typename: 'RuntimeModelQuery', systemAiAiAuditEvent: { __typename: 'SystemAiAiAuditEventConnection', edges: Array<{ __typename: 'SystemAiAiAuditEventEdge', node: { __typename: 'SystemAiAiAuditEvent', rtId: string, at: any, eventType: string, actorRef: string, targetRef: string | null, detail: string | null } | null } | null> | null } | null } | null };

export const GetAuditLogDocument = gql`
    query GetAuditLog($first: Int) {
  runtime {
    systemAiAiAuditEvent(first: $first) {
      edges {
        node {
          rtId
          at
          eventType
          actorRef
          targetRef
          detail
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAuditLogGQL extends Apollo.Query<GetAuditLogQuery, GetAuditLogQueryVariables> {
    document = GetAuditLogDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }