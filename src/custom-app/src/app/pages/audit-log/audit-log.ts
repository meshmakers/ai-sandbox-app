import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { finalize } from 'rxjs/operators';
import { AuditLogService } from '../../services/audit-log.service';
import { AuditLogEntry } from '../../models/audit-log-entry';

@Component({
  selector: 'app-audit-log',
  standalone: true,
  imports: [GridModule, DatePipe],
  templateUrl: './audit-log.html',
  styleUrl: './audit-log.scss',
})
export class AuditLogComponent implements OnInit {
  private readonly auditLogService = inject(AuditLogService);
  private readonly destroyRef = inject(DestroyRef);

  readonly entries = signal<AuditLogEntry[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.auditLogService
      .fetchAuditLog()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: (entries) => this.entries.set(entries),
        error: (err: unknown) => {
          this.entries.set([]);
          this.error.set(err instanceof Error ? err.message : 'Failed to load audit log.');
        },
      });
  }
}
