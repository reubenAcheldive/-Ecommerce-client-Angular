import { CartResponseForUser } from './../../Interfaces/GetCartUser';
import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../../app/Interfaces/Products';

import { createNewOrder } from 'src/app/Interfaces/createNewOrder';
import { CreateNewProduct } from 'src/app/Interfaces/CreateNewProduct';
import { Categories } from 'src/app/Interfaces/categories';
import { lastOrderDetail } from 'src/app/Interfaces/lastOrderDetail';
import { ICities } from 'src/app/Interfaces/Cities';
import { AddItemsToCartByUserId } from 'src/app/Interfaces/AddItemsToCart';

export const fetchCategories = createAction('[Categories] fetch Categories');

export const fetchCategoriesSuccess = createAction(
  '[Categories] fetch Categories Success',
  props<{ categories: Categories[] }>()
);

export const fetchCategoriesFailure = createAction(
  '[Categories] fetch Categories Failure',
  props<{ error: any }>()
);
export const fetchProductsInit = createAction(
  '[Products]  fetch Products',
  props<{ categoryId: string }>()
);
export const fetchProductsSuccess = createAction(
  '[Products]  fetch Products Success',
  props<{ products: IProduct[] }>()
);
export const fetchProductsFailure = createAction(
  '[Products]  fetch Products Failure',
  props<{ error: any }>()
);

export const fetchCities = createAction('[Categories] fetch Categories');

export const fetchCitiesSuccess = createAction(
  '[Categories] fetch Cities Success',
  props<{ cities: ICities[] }>()
);
export const fetchCitiesFailure = createAction(
  '[Categories] fetch Categories Failure',
  props<{ error: any }>()
);

export const fetchSingleProductsBySearch = createAction(
  '[Products]  fetch single product by Search ',
  props<{ str: string }>()
);
export const fetchSingleProductsBySearchSuccess = createAction(
  '[Products] fetch single product by Search Success',
  props<{ products: IProduct[] }>()
);
export const fetchSingleProductsBySearchFailure = createAction(
  '[Products]  fetch single product by Search  Failure',
  props<{ error: any }>()
);

export const productEditByAdminInit = createAction(
  '[Edit product] lode product edit by admin',
  props<{ product: IProduct }>()
);
export const productEditByAdminSuccess = createAction(
  '[Edit product] Success product edit by admin',
  props<{ product: IProduct }>()
);

// ----------------------------------------------------------
//---------------------------------------------------------------
export const getCartByCartIdInit = createAction(
  `[ init cart by Cart id]`,
  props<{ cartId: string }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const getCartByCartIdSuccess = createAction(
  `[Success fetch all cart details ]`,
  props<{ cart: CartResponseForUser }>()
);
export const getCartByCartIdFail = createAction(
  `[Fail  fetch all cart details ]`,
  props<{ error: any }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const getCartByCustomerIdInit = createAction(
  '[ init cart by customer  id]',
  props<{ customerRef: string }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const getCartByCustomerIdSuccess = createAction(
  '[ Success cart by customer  id]',
  props<{ cart: null }>()
);
export const getCartByCustomerFail = createAction(
  `[Fail fetch cart by customer  id ]`,
  props<{ error: any }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const DeleteAllProductCartListInit = createAction(
  '[init delete all product by cart id]',
  props<{ cartId: string }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const DeleteAllProductCartListSuccess = createAction(
  '[init delete all product by cart id]'
);
export const DeleteAllProductCartListFail = createAction(
  `[Fail delete all product by cart id]`,
  props<{ error: any }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const DeleteSingleProductFromCartListInit = createAction(
  '[init delete single product by cart id]',
  props<{ cartId: string; productId: string }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const DeleteSingleProductFromCartListSuccess = createAction(
  '[success delete single product by cart id]'
);

export const DeleteSingleProductFromCartListFail = createAction(
  `[Fail delete all product by cart id]`,
  props<{ error: any }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const addProductsToListInit = createAction(
  '[init add Product to list]',
  props<{
    addItemsCartByUserId: AddItemsToCartByUserId;
  }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const addProductsToListSuccess = createAction(
  '[success add single product by cart id]',
  props<{ cartItems: CartResponseForUser }>()
);
export const addProductsToListFail = createAction(
  '[Fail add single product by cart id]',
  props<{ error: any }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const createNewCartInit = createAction(
  '[init create new cart for customer]',
  props<{ customerRef: string }>()
);
// ----------------------------------------------------------
//---------------------------------------------------------------
export const createNewCartSuccess = createAction(
  '[success create new cart for customer]',
  props<{ cart: null }>()
);
export const createNewCartFail = createAction(
  '[fail create new cart for customer]',
  props<{ error: any }>()
);

export const getUserDetailsShipmentsInit = createAction(
  '[init User details] get city and address for Order ',
  props<{ customerRef: string }>()
);
export const getUserDetailsShipmentsSuccess = createAction(
  '[init User details] get city and address for Order ',
  props<{ city: string; address: string }>()
);
export const getUserDetailsShipmentsError = createAction(
  '[init User details] get city and address for Order ',
  props<{ error: any }>()
);

export const createNewOrderInit = createAction(
  `[init create new order for Customer ]`,
  props<{ payload: createNewOrder }>()
);
export const createNewOrderSuccess = createAction(
  `[Success create new order for Customer ]`,
  props<{ _id: string }>()
);
export const createNewOrderFailed = createAction(
  `[failed create new order for Customer ]`,
  props<{ error: any }>()
);

export const AddNewProductByAdminInit = createAction(
  `[init create and add  new PRoduct by Admin ]`,
  props<{ payload: CreateNewProduct }>()
);
export const AddNewProductByAdminSuccess = createAction(
  `[Success create and add  new PRoduct by Admin ]`,
  props<{ response: IProduct }>()
);
export const AddNewProductByAdminFailed = createAction(
  `[failed create and add  new PRoduct by Admin ]`,
  props<{ error: any }>()
);
export const lastOrderInit = createAction(
  `fetch last order Init `,
  props<{ _id: string }>()
);
export const lastOrderSuccess = createAction(
  `fetch last order  Success`,
  props<{ lastOrderDetail: lastOrderDetail[] }>()
);
export const lastOrderFail = createAction(
  `fetch last order  Fail`,
  props<{ error: any }>()
);
export const logOut = createAction('log out');

export const downloadRecipeInit = createAction(
  'init download',
  props<{ cartId: string; OrderId: string }>()
);
export const downloadRecipeSuccess = createAction('Success Download Recipe');
export const downloadRecipeFail = createAction('Fail Download Recipe');

export const fetchUnavailableDatesInit = createAction(
  'init fetch all blocked date'
);
export const fetchUnavailableDatesSuccess = createAction(
  'Success fetch all blocked date successfully',
  props<{ date: string[] }>()
);

export const fetchUnavailableDatesFail = createAction(
  'fail fetch all blocked date ',
  props<{ error: any }>()
);
