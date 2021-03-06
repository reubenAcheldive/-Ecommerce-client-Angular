import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { Shopping, shoppingReducer } from '../reducers';
export const shoppingSelectorFetcher =
  createFeatureSelector<Shopping>('shoppingFeature');

export const selectError = createSelector(shoppingSelectorFetcher, (state) => {
  return state?.authErrorLogin;
});

export const selectAuthDetails = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.infoLogin
);
export const selectLoading = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.loading
);
export const selectUserId = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.customerId
);
