import type * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type GetTenantModeQueryVariables = Exact<{
  first?: number | null | undefined;
}>;


export type GetTenantModeQuery = { runtime: { __typename: 'RuntimeModelQuery', systemTenantModeConfiguration: { __typename: 'SystemTenantModeConfigurationConnection', edges: Array<{ __typename: 'SystemTenantModeConfigurationEdge', node: { __typename: 'SystemTenantModeConfiguration', rtId: string, maintenanceLevel: Types.SystemMaintenanceLevels, environmentMode: Types.SystemEnvironmentModes } | null } | null> | null } | null } | null };

export const GetTenantModeDocument = gql`
    query GetTenantMode($first: Int) {
  runtime {
    systemTenantModeConfiguration(first: $first) {
      edges {
        node {
          rtId
          maintenanceLevel
          environmentMode
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetTenantModeGQL extends Apollo.Query<GetTenantModeQuery, GetTenantModeQueryVariables> {
    document = GetTenantModeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }