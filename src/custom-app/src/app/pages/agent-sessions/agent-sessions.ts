import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { finalize } from 'rxjs/operators';
import { AgentSessionsService } from '../../services/agent-sessions.service';
import { AgentSessionsEntry } from '../../models/agent-sessions-entry';

@Component({
  selector: 'app-agent-sessions',
  standalone: true,
  imports: [GridModule, ButtonModule, DatePipe],
  templateUrl: './agent-sessions.html',
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
        finalize(() => this.loading.set(false)),
      )
      .subscribe((entries) => this.entries.set(entries));
  }
}
