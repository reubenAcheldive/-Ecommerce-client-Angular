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
export const selectErrorAlert = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.errorAlert
);
export const selectLoginInformation = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.infoLogin
);
export const selectIsRegistered = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.isRegistered
);
export const selectCities = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.citiesList
);


export const errorInRegister = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.errorInRegister
);


export const selectProductEditByAdmin = createSelector(
  shoppingSelectorFetcher,
  (state) => state.editProduct
);



export const selectAllCartList = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.cartListProducts
);
export const getLastCartCreated = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.DateCreatedCart
)
export const selectIdCart = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.cartId
);
export const selectCartMessage = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.cartMessage
);
export const selectDetailShipment = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.getDetailsShipments
);
export const returnNewOrderId = createSelector(
shoppingSelectorFetcher,
(state) => state?.orderID
)
export const lastOrderDetail = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.lastOrderDetail
)
export const fetchUnavailableDates = createSelector(
  shoppingSelectorFetcher,
  (state) => state?.unavailableDates
)
