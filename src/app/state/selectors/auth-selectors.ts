import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { Shopping, shoppingReducer } from '../reducers';
export const shoppingSelectorFetcher =
  createFeatureSelector<Shopping>('shoppingFeature');

export const selectError = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.error
);

export const authDetails = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.infoLogin
);
