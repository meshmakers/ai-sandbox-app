import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { UsageRecordsService } from '../../services/usage-records.service';
import { UsageRecordsEntry } from '../../models/usage-records-entry';

@Component({
  selector: 'app-usage-records',
  standalone: true,
  imports: [GridModule, ButtonModule, DatePipe, DecimalPipe],
  templateUrl: './usage-records.html',
  styleUrl: './usage-records.scss',
})
export class UsageRecordsComponent implements OnInit {
  private readonly usageRecordsService = inject(UsageRecordsService);

  readonly entries = signal<UsageRecordsEntry[]>([]);
  readonly loading = signal(false);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.usageRecordsService.fetchUsageRecords().subscribe((entries) => {
      this.entries.set(entries);
      this.loading.set(false);
    });
  }
}
