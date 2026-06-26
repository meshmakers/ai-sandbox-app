import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { TenantModeEntry } from '../../models/tenant-mode-entry';
import { TenantModeService } from '../../services/tenant-mode.service';

@Component({
  selector: 'app-tenant-mode',
  standalone: true,
  imports: [GridModule, ButtonModule],
  templateUrl: './tenant-mode.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
