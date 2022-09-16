import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TogglePageService } from './togglePage/toggle-page.service';
import {
  selectLoading,
  selectError,
  selectAuthDetails,
  shoppingSelectorFetcher,
} from '../../state/selectors/auth-selectors';
import { Observable, takeUntil, Subject } from 'rxjs';
import { AuthErrorLogin } from 'src/app/Interfaces/auth/Auth.error';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit, OnChanges, OnDestroy {
  constructor(
    private togglePageService: TogglePageService,
    private store: Store,
    private dialog: MatDialogRef<AuthenticationComponent>,
    private toastr: ToastrService
  ) {}
  unsubscribe$ = new Subject<void>();

  ngOnChanges(): void {
    this.store.select(selectLoading);
  }
  toggle = true;
  loading = true;

  ngOnInit(): void {
    this.togglePageService.toggleStatus
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((l) => (this.toggle = !l));
    this.handleWithLoading();
    this.store
      .select(selectError)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        if (data) {
          if (Array.isArray(data.error.messageError.message)) {
            data.error.messageError.message.forEach((d) =>
              this.toastr.error(d)
            );
          }
          this.toastr.error(data.error.messageError.message.toString());
        }
      });
  }

  handleWithLoading() {
    this.store
      .select(selectLoading)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((loading) => (this.loading = loading));
  }

  ngOnDestroy(): void {
    this.togglePageService.toggleStatus.complete();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  closeAuthDialog = () => {
    this.dialog.close();
  };
}
