import { createReducer, on } from '@ngrx/store';
import { CartItems } from 'src/app/InterfaceModal/GetCartByCartIdResponse';
import { IUserInformation } from 'src/app/InterfaceModal/userInformation';
import { lastOrderDetail } from 'src/app/InterfaceModal/lastOrderDetail';
import { Categories } from 'src/app/InterfaceModal/categories';
import { ICities } from 'src/app/InterfaceModal/Cities';

import * as ShoppingActions from '../actions/shopping.actions';
import * as UserInformation from '../actions/user.actions';
import { IProduct } from '../../../app/InterfaceModal/Products';

export interface Shopping {
  categories: Categories[] | null;
  products: IProduct[] | null;
  loading: boolean | null;
  error: any | null;
  infoLogin: IUserInformation | null;
  isRegistered: boolean | null;
  citiesList: ICities[] | null;
  errorAlert: any;

  editProduct: IProduct | null;
  errorInRegister: boolean | null;
  lastOrderDetail: lastOrderDetail[] | null;

  cartId: string | null;
  cartListProducts: CartItems[] | null;
  cartMessage: string | null;
  getDetailsShipments: { city: string; address: string } | null;
  orderID: string | null;
  DateCreatedCart: number | Date | null;
  unavailableDates: string[] | null;
}

export const initialShoppingState: Shopping | null = {
  categories: null,
  products: null,
  loading: null,
  error: null,
  infoLogin: null,
  isRegistered: null, //check in register component if user can to continue with registration
  citiesList: null,
  errorAlert: null,

  editProduct: null,

  errorInRegister: false,

  cartId: null,
  cartListProducts: [],
  cartMessage: '',
  getDetailsShipments: null,
  lastOrderDetail: null,
  orderID: '',
  DateCreatedCart: null,
  unavailableDates: null,
};

export const shoppingReducer = createReducer(
  initialShoppingState,
  on(
    ShoppingActions.fetchCategories,
    ShoppingActions.fetchProductsInit,
    (state) => ({
      ...state,
      loading: true,
    })
  ),
  on(ShoppingActions.fetchCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
    loading: false,
  })),
  on(ShoppingActions.fetchCategoriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    errorAlert: error,
  })),
  on(ShoppingActions.fetchProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(ShoppingActions.fetchProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    errorAlert: error,
  })),
  on(
    ShoppingActions.fetchSingleProductsBySearchSuccess,
    (state, { products }) => ({
      ...state,
      products,
      loading: false,
    })
  ),
  on(
    ShoppingActions.fetchSingleProductsBySearchFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      errorAlert: error,
    })
  ),

  on(
    UserInformation.loginInitSuccess,
    UserInformation.registerUserSuccess,
    (state, { infoLogin }) => ({
      ...state,
      infoLogin:infoLogin,
      loading: true,
      errorAlert: null,
    })
  ),
  on(UserInformation.loginInitFailure, (state, { error }) => ({
    ...state,
    errorAlert: error,
    loading: false,
  })),

  on(UserInformation.checkRegisterInit, (state, action) => ({
    ...state,
    id: action.id,
    loading: false,
  })),
  on(UserInformation.checkRegisterSuccess, (state, { success }) => ({
    ...state,
    isRegistered: success,
    loading: false,
    errorAlert: null,
  })),
  on(UserInformation.checkRegisterFailure, (state, { error }) => ({
    ...state,
    errorAlert: error,
    isRegistered: false,
    loading: false,
  })),
  on(UserInformation.registerUserFailure, (state, { error }) => ({
    ...state,
    errorInRegister: error.error.isError,
  })),
  on(ShoppingActions.fetchCitiesSuccess, (state, { cities }) => ({
    ...state,
    citiesList: cities,
  })),
  on(ShoppingActions.fetchCitiesFailure, (state, { error }) => ({
    ...state,
    errorAlert: error,
    loading: false,
  })),

  on(ShoppingActions.productEditByAdminInit, (state, { product }) => ({
    ...state,
    editProduct: product,
    loading: false,
  })),
  on(ShoppingActions.productEditByAdminSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map((item) => {
      return item.id == product.id ? product : item;
    }),
    loading: false,
  })),
  on(ShoppingActions.createNewCartSuccess, (state, { cart }) => ({
    ...state,
    cartId: cart.cart[0]?._id,
    DateCreatedCart: cart.cart[0]?.date,
    cartListProducts: cart.cart[0]?.cartItems,
  })),

  on(ShoppingActions.addProductToListSuccess, (state, { cartItems }) => ({
    ...state,
    cartListProducts: cartItems,
  })),
  on(
    ShoppingActions.DeleteSingleProductFromCartListInit,
    (state, { cartId, productId }) => ({
      ...state,
      cartListProducts: state.cartListProducts.filter(
        (item) => item._id !== productId
      ),
    })
  ),

  on(ShoppingActions.DeleteAllProductCartListInit, (state) => ({
    ...state,
    cartListProducts: [],
  })),

  on(ShoppingActions.getCartByCustomerIdSuccess, (state, { cart }) => ({
    ...state,
    cartId: cart.cart[0]?._id,
    DateCreatedCart: cart.cart[0]?.date,
    cartListProducts: cart.cart[0]?.cartItems,
  })),
  on(
    ShoppingActions.getUserDetailsShipmentsSuccess,
    (state, { city, address }) => ({
      ...state,
      getDetailsShipments: { city, address },
    })
  ),
  on(ShoppingActions.lastOrderSuccess, (state, { lastOrderDetail }) => ({
    ...state,
    lastOrderDetail: lastOrderDetail,
  })),
  on(ShoppingActions.createNewOrderSuccess, (state, { _id }) => ({
    ...state,
    orderID: _id,
  })),
  on(ShoppingActions.fetchUnavailableDatesSuccess, (state, { date }) => ({
    ...state,
    unavailableDates: date,
  })),
  on(ShoppingActions.logOut, (state) => ({
    cartId: null,
    cartListProducts: null,
    cartMessage: null,
    categories: null,
    citiesList: null,
    editProduct: null,
    error: null,
    errorAlert: null,
    errorInRegister: null,
    getDetailsShipments: null,
    infoLogin: null,
    isRegistered: null,
    lastOrderDetail: null,
    loading: null,
    orderID: null,
    products: null,
    DateCreatedCart: null,
    unavailableDates: [],
  }))
);
