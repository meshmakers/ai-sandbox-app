import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { authorizeGuard } from '@meshmakers/shared-auth';
import { languageGuard } from './guards/language.guard';
import { LanguageService } from './services/language.service';
import { HomeComponent } from './pages/home/home';
import { DeveloperInfoComponent } from './pages/developer-info/developer-info';
import { SystemTenantListComponent } from './pages/system-tenant-list/system-tenant-list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: async () => {
      const languageService = inject(LanguageService);
      const defaultLang = languageService.getDefaultLanguage();
      return defaultLang?.cultureCode ?? 'en-GB';
    },
    pathMatch: 'full',
  },
  {
    path: ':lang',
    canActivate: [languageGuard, authorizeGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          breadcrumb: [{ label: 'Home' }],
        },
      },
      {
        path: 'developer-info',
        component: DeveloperInfoComponent,
        data: {
          breadcrumb: [
            { label: 'Home', url: '' },
            { label: 'Developer Info' },
          ],
        },
      },
      {
        path: 'tenants',
        component: SystemTenantListComponent,
        data: {
          breadcrumb: [
            { label: 'Home', url: '' },
            { label: 'System Tenants' },
          ],
        },
      },
    ],
  },
  {
    path: '**',
    redirectTo: async () => {
      const languageService = inject(LanguageService);
      const defaultLang = languageService.getDefaultLanguage();
      return defaultLang?.cultureCode ?? 'en-GB';
    },
  },
];
