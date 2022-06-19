import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/Interfaces/categories';

import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @Input() categories;
  @Output() currentCategoryId = new EventEmitter<string>();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSelectCategory(category: Categories) {
    this.router.navigate(['/online/category', category._id]);
  }
  
}
