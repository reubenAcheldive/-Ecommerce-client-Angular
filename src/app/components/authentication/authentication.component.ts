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
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit, OnChanges, OnDestroy {
  constructor(
    private togglePageService: TogglePageService,
    private store: Store
  ) {}
  unsubscribe$ = new Subject<void>();

  ngOnChanges(): void {
    this.store.select(selectLoading);
  }
  toggle = true;
  loading = true;

  ngOnInit(): void {
    this.togglePageService.toggleStatus.subscribe((l) => (this.toggle = !l));
    this.handleWithLoading();
  }

  handleWithLoading() {
    this.store
      .select(selectLoading)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((l) => (this.loading = l));
  }

  ngOnDestroy(): void {
    this.togglePageService.toggleStatus.complete();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
