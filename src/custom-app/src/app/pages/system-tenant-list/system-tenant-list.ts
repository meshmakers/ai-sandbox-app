import { Component, OnInit, inject, signal } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { TranslateModule } from '@ngx-translate/core';
import {
  SystemTenant,
  SystemTenantService,
} from '../../services/system-tenant.service';

@Component({
  selector: 'app-system-tenant-list',
  standalone: true,
  imports: [GridModule, TranslateModule],
  templateUrl: './system-tenant-list.html',
  styleUrl: './system-tenant-list.scss',
})
export class SystemTenantListComponent implements OnInit {
  private readonly systemTenantService = inject(SystemTenantService);

  readonly tenants = signal<SystemTenant[]>([]);
  readonly loading = signal(false);

  ngOnInit(): void {
    this.loading.set(true);
    this.systemTenantService.getTenants().subscribe((tenants) => {
      this.tenants.set(tenants);
      this.loading.set(false);
    });
  }
}
