import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

export type GetAuditLogQueryVariables = Exact<{
  first?: InputMaybe<number>;
}>;

export type GetAuditLogQuery = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', systemAiAuditEvent?: { __typename?: 'SystemAiAuditEventConnection', edges?: Array<{ __typename?: 'SystemAiAuditEventEdge', node?: { __typename?: 'SystemAiAuditEvent', rtId: string, at: string, eventType: string, actorRef: string, targetRef?: string | null, detail?: string | null } | null } | null> | null } | null } | null };

export const GetAuditLogDocument = gql`
    query GetAuditLog($first: Int) {
  runtime {
    systemAiAuditEvent(first: $first) {
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
