import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Shopping } from '../../../state/reducers/index';
import * as ShoppingSelectors from '../../../state/selectors/shopping-selectors';
import * as ShoppingActions from '../../../state/actions/shopping.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { createNewOrder } from 'src/app/Interfaces/createNewOrder';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ICities } from 'src/app/Interfaces/Cities';
@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css'],
})
export class FormOrderComponent implements OnInit {
  select: string = 'option2';
  cartRef: string;
  CustomerId: string;
  cities: Observable<ICities[]> = this.store.select(
    ShoppingSelectors.selectCities
  );

  public orderFormHandel!: FormGroup;
  private unSubscriber$ = new Subject<void>();
  blockedDate: any[];
  minDate: Date = new Date();

  constructor(
    private store: Store<Shopping>,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ShoppingActions.fetchUnavailableDatesInit());
    this.store.dispatch(ShoppingActions.fetchCities());
    this.store
      .select(ShoppingSelectors.selectDetailShipment)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe(({ city, address }) => {
        this.createFormOrder(city, address);
      });
    this.store
      .select(ShoppingSelectors.selectIdCart)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((cartRef) => {
        if (cartRef) {
          this.cartRef = cartRef;
        }
      });
    this.store
      .select(ShoppingSelectors.selectLoginInformation)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((loginInfo) => {
        if (loginInfo) {
          this.CustomerId = loginInfo.userId;
        }
      });
    this.store
      .select(ShoppingSelectors.fetchUnavailableDates)
      .pipe(takeUntil(this.unSubscriber$))
      .subscribe((blockedDate) => {
        return (this.blockedDate = blockedDate);
      });
  }
  createFormOrder(city: string, address: string): void {
    this.orderFormHandel = this.fb.group({
      city: [city, Validators.required],
      address: [address, Validators.required],
      date: ['', Validators.required],
      creditCard: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$'),
          Validators.maxLength(16),
          Validators.minLength(16),

        ],
      ],
    });
  }
  get creditCard() {
    return this.orderFormHandel.get('creditCard');
  }
  handleError(name: string) {
    let nameElement = this.orderFormHandel.get(name);

    if (nameElement.hasError('required')) {
      return `${name} is required`;
    }
    if (nameElement.hasError('pattern')) {
      return `${name} is not Valid and must contain 16 digit number`;
    }

    return null;
  }

  onSave(): void {
    const { city, address, date, creditCard } = this.orderFormHandel.value;
    const payload: createNewOrder = {
      DateDelivery: date,

      customerRef: this.CustomerId,
      address: address,
      cartRef: this.cartRef,
      cityDelivery: city,
      fourDigitCreditCard: creditCard,
    };

    this.store.dispatch(ShoppingActions.createNewOrderInit({ payload }));
    this.router.navigateByUrl('/store/order/invoice');
  }

  myFilter = (d: Date | null): boolean => {
    const day = moment(d).format('YYYY/MM/DD');

    console.log(day);

    if (!this.blockedDate) return true;

    const t = this.blockedDate.find((date) => {
      return moment(date).format('YYYY/MM/DD').includes(day);
    });

    return t !== day && d > new Date();
  };
  ngOnDestroy(): void {
    this.unSubscriber$.next();
    this.unSubscriber$.complete();
  }
}
