import { Component, OnInit, inject, signal } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'app-system-permissions',
  standalone: true,
  templateUrl: './system-permissions.html',
  styleUrl: './system-permissions.scss',
})
export class SystemPermissionsComponent implements OnInit {
  private readonly configurationService = inject(ConfigurationService);

  readonly scopes = signal<string[]>([]);

  ngOnInit(): void {
    this.scopes.set(this.configurationService.getScopes());
  }
}
