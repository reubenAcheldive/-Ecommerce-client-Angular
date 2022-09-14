import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '../../../../Interfaces/categories';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css'],
})
export class CatagoriesComponent implements OnInit {
  @Input() categories: Categories[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}
  fetchProductByCategoryId(id: string) {
    console.log({ id });
    this.router.navigate([id]);
  }
}
