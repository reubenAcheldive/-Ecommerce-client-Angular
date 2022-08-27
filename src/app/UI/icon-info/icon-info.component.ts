import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-info',
  templateUrl: './icon-info.component.html',
  styleUrls: ['./icon-info.component.css'],
})
export class IconInfoComponent implements OnInit {
  @Input() icon: string;
  @Input() label?: string;
  constructor() {}

  ngOnInit(): void {}
}
