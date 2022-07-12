import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../../app/Interfaces/Products';

import { Categories } from 'src/app/Interfaces/categories';

import { ICities } from 'src/app/Interfaces/Cities';

import {
  CategoriesTypes,
  CitiesTypes,
  FetchSingleProductsBySearchTypes,
  ProductsTypes,
  EditProductByAdminTypes,
  GetCartByIdTypes,
  getCartByCustomerIdTypes,
  DeleteAllCartItemsTypes,
  DeleteSingleItemInCartTypes,
  AddProductToCartListTypes,
  CreateNewCartTypes,
  GetUserDetailsShipmentsTypes,
  CreateNewOrderTypes,
  AddNewProductByAdminTypes,
  LastOrderTypes,
  DownloadRecipeTypes,
  FetchUnavailableDatesTypes,
  UpdateItemQuantityInCart,
  fetchAddressesTypes,
  editAddressTypes,
} from './acationTypes';
import { Cart } from 'src/app/Interfaces/cart/GetCartUser';

import { CreateOrder } from './../../Interfaces/order/createNewOrder';
import { OrderDetail } from 'src/app/Interfaces/order/lastOrderDetail';
import { AddItems } from 'src/app/Interfaces/cart/AddItemsToCart';
import { AddItem } from 'src/app/Interfaces/cart/UpdateItemInCart';
import { IAddresses } from './../../Interfaces/order/addresses';

export const fetchCategories = createAction(CategoriesTypes.init);

export const fetchCategoriesSuccess = createAction(
  CategoriesTypes.success,
  props<{ categories: Categories[] }>()
);

export const fetchCategoriesFailure = createAction(
  CategoriesTypes.failure,
  props<{ error: any }>()
);

export const fetchProductsInit = createAction(
  ProductsTypes.init,
  props<{ categoryId: string }>()
);
export const fetchProductsSuccess = createAction(
  ProductsTypes.success,
  props<{ products: IProduct[] }>()
);
export const fetchProductsFailure = createAction(
  ProductsTypes.failure,
  props<{ error: any }>()
);

export const fetchCities = createAction(CitiesTypes.init);

export const fetchCitiesSuccess = createAction(
  CitiesTypes.success,
  props<{ cities: ICities[] }>()
);
export const fetchCitiesFailure = createAction(
  CitiesTypes.success,
  props<{ error: any }>()
);

export const fetchSingleProductsBySearch = createAction(
  FetchSingleProductsBySearchTypes.init,
  props<{ str: string }>()
);
export const fetchSingleProductsBySearchSuccess = createAction(
  FetchSingleProductsBySearchTypes.success,
  props<{ products: IProduct[] }>()
);
export const fetchSingleProductsBySearchFailure = createAction(
  FetchSingleProductsBySearchTypes.failure,
  props<{ error: any }>()
);

export const productEditByAdminInit = createAction(
  EditProductByAdminTypes.init,
  props<{ product: IProduct }>()
);
export const productEditByAdminSuccess = createAction(
  EditProductByAdminTypes.success,
  props<{ product: IProduct }>()
);
export const productEditByAdminFailure = createAction(
  EditProductByAdminTypes.failure,
  props<{ error: any }>()
);

// ----------------------------------------------------------
//---------------------------------------------------------------
export const getCartByCartIdInit = createAction(
  GetCartByIdTypes.init,
  props<{ cartId: string }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const getCartByCartIdSuccess = createAction(
  GetCartByIdTypes.success,
  props<{ cart: Cart }>()
);
export const getCartByCartIdFail = createAction(
  GetCartByIdTypes.failure,
  props<{ error: any }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------

export const getCartByCustomerIdInit = createAction(
  getCartByCustomerIdTypes.init,
  props<{ customerRef: string }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const getCartByCustomerIdSuccess = createAction(
  getCartByCustomerIdTypes.success,
  props<{ cart: null }>()
);
export const getCartByCustomerFail = createAction(
  getCartByCustomerIdTypes.failure,
  props<{ error: any }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------

export const deleteAllItemsInCartInit = createAction(
  DeleteAllCartItemsTypes.init,
  props<{ cartId: string }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const deleteAllItemsInCartSuccess = createAction(
  DeleteAllCartItemsTypes.success
);
export const deleteAllItemsInCartFail = createAction(
  DeleteAllCartItemsTypes.failure,
  props<{ error: any }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------

export const DeleteSingleProductFromCartListInit = createAction(
  DeleteSingleItemInCartTypes.init,
  props<{ cartId: string; itemId: string }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const DeleteSingleProductFromCartListSuccess = createAction(
  DeleteSingleItemInCartTypes.success
);

export const DeleteSingleProductFromCartListFail = createAction(
  DeleteSingleItemInCartTypes.failure,
  props<{ error: any }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------

export const addSingleProductToListCartInit = createAction(
  AddProductToCartListTypes.init,
  props<{
    addItemsCartByUserId: AddItems;
  }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const addSingleProductToListCartSuccess = createAction(
  AddProductToCartListTypes.success,
  props<{ cartItems: Cart }>()
);
export const addSingleProductToListCartFail = createAction(
  AddProductToCartListTypes.failure,
  props<{ error: any }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------

export const createNewCartInit = createAction(
  CreateNewCartTypes.init,
  props<{ customerRef: string }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------

export const createNewCartSuccess = createAction(
  CreateNewCartTypes.success,
  props<{ cart: null }>()
);
export const createNewCartFail = createAction(
  CreateNewCartTypes.failure,
  props<{ error: any }>()
);

export const getUserDetailsShipmentsInit = createAction(
  GetUserDetailsShipmentsTypes.init,
  props<{ customerRef: string }>()
);
export const getUserDetailsShipmentsSuccess = createAction(
  GetUserDetailsShipmentsTypes.success,
  props<{ city: string; address: string }>()
);
export const getUserDetailsShipmentsError = createAction(
  GetUserDetailsShipmentsTypes.failure,
  props<{ error: any }>()
);

export const createNewOrderInit = createAction(
  CreateNewOrderTypes.init,
  props<{ payload: CreateOrder }>()
);
export const createNewOrderSuccess = createAction(
  CreateNewOrderTypes.success,
  props<{ _id: string }>()
);
export const createNewOrderFailed = createAction(
  CreateNewOrderTypes.failure,
  props<{ error: any }>()
);

export const AddNewProductByAdminInit = createAction(
  AddNewProductByAdminTypes.init,
  props<{ payload: IProduct }>()
);
export const AddNewProductByAdminSuccess = createAction(
  AddNewProductByAdminTypes.success,
  props<{ response: IProduct }>()
);
export const AddNewProductByAdminFailed = createAction(
  AddNewProductByAdminTypes.failure,
  props<{ error: any }>()
);

export const lastOrderInit = createAction(
  LastOrderTypes.init,
  props<{ _id: string }>()
);
export const lastOrderSuccess = createAction(
  LastOrderTypes.success,
  props<{ OrderDetail: OrderDetail[] }>()
);
export const lastOrderFail = createAction(
  LastOrderTypes.failure,
  props<{ error: any }>()
);

export const logOut = createAction('log out');

export const downloadRecipeInit = createAction(
  DownloadRecipeTypes.init,
  props<{ cartId: string; OrderId: string }>()
);
export const downloadRecipeSuccess = createAction(DownloadRecipeTypes.success);
export const downloadRecipeFail = createAction(DownloadRecipeTypes.failure);

export const fetchUnavailableDatesInit = createAction(
  FetchUnavailableDatesTypes.init
);
export const fetchUnavailableDatesSuccess = createAction(
  FetchUnavailableDatesTypes.success,
  props<{ date: string[] }>()
);

export const fetchUnavailableDatesFail = createAction(
  FetchUnavailableDatesTypes.failure,
  props<{ error: any }>()
);
export const initUpdateItemQuantityInCart = createAction(
  UpdateItemQuantityInCart.init,
  props<{ itemUpdate: AddItem }>()
);
export const successUpdateItemQuantityInCart = createAction(
  UpdateItemQuantityInCart.success,
  props<{ cartList: Cart }>()
);
export const failUpdateItemQuantityInCart = createAction(
  UpdateItemQuantityInCart.failure,
  props<{ error: any }>()
);





export const InitFetchAddress = createAction(
  fetchAddressesTypes.init,
  props<{ customerRef: string }>()
);
export const successFetchAddress = createAction(
  fetchAddressesTypes.success,
  props<{ payload: IAddresses }>()
);
export const failureFetchAddress = createAction(
  fetchAddressesTypes.failure,
  props<{ payload: IAddresses }>()
);





export const InitEditAddress = createAction(
  editAddressTypes.init,
  props<{ payload: IAddresses }>()
);
export const successEditAddress = createAction(
  editAddressTypes.success,
  props<{ payload: IAddresses }>()
);
export const failureEditAddress = createAction(
  editAddressTypes.failure,
  props<{ payload: IAddresses }>()
);
