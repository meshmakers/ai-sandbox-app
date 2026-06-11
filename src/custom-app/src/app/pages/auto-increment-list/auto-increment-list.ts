import { Component, OnInit, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { AutoIncrementService } from '../../services/auto-increment.service';
import { AutoIncrementRow } from '../../models/auto-increment-row';

@Component({
  selector: 'app-auto-increment-list',
  standalone: true,
  imports: [GridModule, TranslatePipe],
  templateUrl: './auto-increment-list.html',
  styleUrl: './auto-increment-list.scss',
})
export class AutoIncrementListComponent implements OnInit {
  private readonly autoIncrementService = inject(AutoIncrementService);

  readonly rows = signal<AutoIncrementRow[]>([]);
  readonly loading = signal(false);

  ngOnInit(): void {
    this.loading.set(true);
    this.autoIncrementService.getAutoIncrements().subscribe((rows) => {
      this.rows.set(rows);
      this.loading.set(false);
    });
  }
}
