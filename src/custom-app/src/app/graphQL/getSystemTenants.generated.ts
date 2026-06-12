import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

export type GetSystemTenantsQueryVariables = Exact<{ [key: string]: never; }>;

export type GetSystemTenantsQuery = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', systemTenant?: { __typename?: 'SystemTenantConnection', edges?: Array<{ __typename?: 'SystemTenantEdge', node?: { __typename?: 'SystemTenant', rtId: string, name: string } | null } | null> | null } | null } | null };

export const GetSystemTenantsDocument = gql`
    query GetSystemTenants {
  runtime {
    systemTenant(first: 1000) {
      edges {
        node {
          rtId
          name
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSystemTenantsGQL extends Apollo.Query<GetSystemTenantsQuery, GetSystemTenantsQueryVariables> {
    document = GetSystemTenantsDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
