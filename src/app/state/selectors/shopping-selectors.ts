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
export const getLastCartCreated = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.DateCreatedCart
);
export const selectIdCart = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.cartId
);

export const selectDetailShipment = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.getDetailsShipments
);
export const returnNewOrderId = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.orderID
);

export const fetchUnavailableDates = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.unavailableDates
);

export const selectAddress = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.address
);
export const getALlPayment = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.payments
);
