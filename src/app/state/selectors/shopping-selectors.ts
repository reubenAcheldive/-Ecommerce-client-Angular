import { state } from '@angular/animations';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { Shopping, shoppingReducer } from '../reducers';

export const shoppingSelectorFetcher =
  createFeatureSelector<Shopping>('shoppingFeature');

export const selectLoading = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.loading
);

export const selectProducts = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.products
);
export const selectCategories = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.categories
);

export const selectCities = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.citiesList
);

export const selectCartList = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.cart
);






export const selectUnavailableDates = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.unavailableDates
);

export const selectAddress = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.address
);
export const selectAllPayment = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.payments
);
