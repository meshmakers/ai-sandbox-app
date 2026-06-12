import { Component, inject } from '@angular/core';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-system-roles-list',
  standalone: true,
  templateUrl: './system-roles-list.html',
  styleUrl: './system-roles-list.scss',
})
export class SystemRolesListComponent {
  private readonly rolesService = inject(RolesService);

  readonly roles = this.rolesService.roles;
}
