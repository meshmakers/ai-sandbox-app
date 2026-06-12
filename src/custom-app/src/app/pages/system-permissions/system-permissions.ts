import { Component, OnInit, inject, signal } from '@angular/core';
import { SystemPermission } from '../../models/system-permission.model';
import { SystemPermissionsService } from '../../services/system-permissions.service';

@Component({
  selector: 'app-system-permissions',
  standalone: true,
  templateUrl: './system-permissions.html',
  styleUrl: './system-permissions.scss',
})
export class SystemPermissions implements OnInit {
  private readonly systemPermissionsService = inject(SystemPermissionsService);

  readonly permissions = signal<SystemPermission[]>([]);

  ngOnInit(): void {
    this.permissions.set(this.systemPermissionsService.getPermissions());
  }
}
