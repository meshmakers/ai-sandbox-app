import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { SystemUserService } from '../../services/system-user.service';
import { SystemUser } from '../../models/system-user';

@Component({
  selector: 'app-system-user-list',
  standalone: true,
  imports: [CommonModule, GridModule, TranslateModule],
  templateUrl: './system-user-list.html',
  styleUrl: './system-user-list.scss',
})
export class SystemUserListComponent implements OnInit {
  private readonly systemUserService = inject(SystemUserService);

  readonly users = signal<SystemUser[]>([]);
  readonly loading = signal(false);

  ngOnInit(): void {
    this.loading.set(true);
    this.systemUserService.getUsers().subscribe((users) => {
      this.users.set(users);
      this.loading.set(false);
    });
  }
}
