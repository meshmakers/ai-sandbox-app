import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { authorizeGuard } from '@meshmakers/shared-auth';
import { languageGuard } from './guards/language.guard';
import { LanguageService } from './services/language.service';
import { HomeComponent } from './pages/home/home';
import { DeveloperInfoComponent } from './pages/developer-info/developer-info';
import { SystemRolesListComponent } from './pages/system-roles-list/system-roles-list';

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
        path: 'roles',
        component: SystemRolesListComponent,
        data: {
          breadcrumb: [
            { label: 'Home', url: '' },
            { label: 'System Roles' },
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
