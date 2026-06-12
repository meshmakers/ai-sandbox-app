import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetTenantModeQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetTenantModeQuery = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', systemTenantModeConfiguration?: { __typename?: 'SystemTenantModeConfigurationConnection', edges?: Array<{ __typename?: 'SystemTenantModeConfigurationEdge', node?: { __typename?: 'SystemTenantModeConfiguration', rtId: string, maintenanceLevel: string, environmentMode: string } | null } | null> | null } | null } | null };

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