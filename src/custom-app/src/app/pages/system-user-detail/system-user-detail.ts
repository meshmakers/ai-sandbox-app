import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LabelModule } from '@progress/kendo-angular-label';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { SystemUserService } from '../../services/system-user.service';
import { SystemUser } from '../../models/system-user';

@Component({
  selector: 'app-system-user-detail',
  standalone: true,
  imports: [TranslateModule, LabelModule, TextBoxModule],
  templateUrl: './system-user-detail.html',
  styleUrl: './system-user-detail.scss',
})
export class SystemUserDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly systemUserService = inject(SystemUserService);

  readonly user = signal<SystemUser | null>(null);
  readonly loading = signal(false);

  ngOnInit(): void {
    const rtId = this.route.snapshot.paramMap.get('id');
    if (!rtId) {
      return;
    }
    this.loading.set(true);
    this.systemUserService.getUser(rtId).subscribe((user) => {
      this.user.set(user);
      this.loading.set(false);
    });
  }
}
