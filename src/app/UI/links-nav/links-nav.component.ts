import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/Interfaces/auth/userInformation';

@Component({
  selector: 'app-links-nav',
  templateUrl: './links-nav.component.html',
  styleUrls: ['./links-nav.component.css'],
})
export class LinksNavComponent implements OnInit {
  @Input() userData!:IUser;
  constructor() {}

  ngOnInit(): void {}
}
