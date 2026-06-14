import { Component, OnInit, inject, signal } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { TenantModeService } from '../../services/tenant-mode.service';
import { TenantModeEntry } from '../../models/tenant-mode-entry';

@Component({
  selector: 'app-tenant-mode',
  standalone: true,
  imports: [GridModule, ButtonModule],
  templateUrl: './tenant-mode.html',
  styleUrl: './tenant-mode.scss',
})
export class TenantModeComponent implements OnInit {
  private readonly tenantModeService = inject(TenantModeService);

  readonly entries = signal<TenantModeEntry[]>([]);
  readonly loading = signal(false);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.tenantModeService.fetchTenantMode().subscribe((entries) => {
      this.entries.set(entries);
      this.loading.set(false);
    });
  }
}
