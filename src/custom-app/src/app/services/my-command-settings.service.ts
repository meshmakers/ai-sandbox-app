import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CommandItem,
  CommandSettingsService,
} from '@meshmakers/shared-services';
import { auditLogIcon, developerBoardIcon, gridIcon, homeIcon } from '../custom-svg-icons';

@Injectable()
export class MyCommandSettingsService extends CommandSettingsService {
  private readonly activatedRoute = inject(ActivatedRoute);

  override get commandItems(): CommandItem[] {
    return [
      {
        id: 'home',
        type: 'link',
        text: 'Home',
        svgIcon: homeIcon,
        link: async (): Promise<string> => '',
      },
      {
        id: 'separator-1',
        type: 'separator',
        text: '',
      },
      {
        id: 'developer-info',
        type: 'link',
        text: 'Developer Info',
        svgIcon: developerBoardIcon,
        link: async (): Promise<string> => 'developer-info',
      },
      {
        id: 'usage-records',
        type: 'link',
        text: 'Usage Records',
        svgIcon: gridIcon,
        link: async (): Promise<string> => 'usage-records',
      },
      {
        id: 'agent-sessions',
        type: 'link',
        text: 'Agent Sessions',
        svgIcon: gridIcon,
        link: async (): Promise<string> => 'agent-sessions',
      },
      {
        id: 'audit-log',
        type: 'link',
        text: 'Audit Log',
        svgIcon: auditLogIcon,
        link: async (): Promise<string> => 'audit-log',
      },
    ];
  }

  override get navigateRelativeToRoute(): ActivatedRoute {
    return this.activatedRoute.firstChild ?? this.activatedRoute;
  }
}
