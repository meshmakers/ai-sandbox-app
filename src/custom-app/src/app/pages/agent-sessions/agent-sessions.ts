import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { finalize } from 'rxjs/operators';
import { AgentSessionsEntry } from '../../models/agent-sessions-entry';
import { AgentSessionsService } from '../../services/agent-sessions.service';

@Component({
  selector: 'app-agent-sessions',
  standalone: true,
  imports: [GridModule, ButtonModule, DatePipe],
  templateUrl: './agent-sessions.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './agent-sessions.scss',
})
export class AgentSessionsComponent implements OnInit {
  private readonly agentSessionsService = inject(AgentSessionsService);
  private readonly destroyRef = inject(DestroyRef);

  readonly entries = signal<AgentSessionsEntry[]>([]);
  readonly loading = signal(false);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.agentSessionsService
      .fetchAgentSessions()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.set(false))
      )
      .subscribe((entries) => this.entries.set(entries));
  }
}
