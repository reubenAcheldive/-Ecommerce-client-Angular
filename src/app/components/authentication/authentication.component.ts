import { Component, OnInit, Output } from '@angular/core';
import { TogglePageService } from './togglePage/toggle-page.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  constructor(private togglePageService: TogglePageService) {}
  toggle = true;
  ngOnInit(): void {
    this.togglePageService.toggleStatus.subscribe((l) => (this.toggle = l));
  }
}
