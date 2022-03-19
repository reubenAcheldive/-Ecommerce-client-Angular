import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ProductService } from 'src/app/services/store/product/product.service';
import { OrderService } from 'src/app/services/store/order/order.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  private unSubscriber$ = new Subject<void>();
  quantityOfProducts: number;
  quantityOfOrders:number
  constructor(private productService: ProductService,private orderService: OrderService) {}

  ngOnInit(): void {
    this.productService
      .totalOfProductInDB().pipe(takeUntil(this.unSubscriber$))
      .subscribe(({ quantityOfProducts }) => {
        this.quantityOfProducts = quantityOfProducts;
      });

      this.orderService.getOrdersQuantity().pipe(takeUntil(this.unSubscriber$)).subscribe(({ quantityOrders }) => {
      this.quantityOfOrders = quantityOrders
      })
  }
  ngOnDestroy() {
    this.unSubscriber$.next();
    this.unSubscriber$.complete()
  }
}
