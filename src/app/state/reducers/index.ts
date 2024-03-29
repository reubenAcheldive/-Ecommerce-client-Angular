import { createReducer, on } from '@ngrx/store';

import { IUser } from 'src/app/Interfaces/auth/userInformation';
import { Categories } from 'src/app/Interfaces/categories';
import { ICities } from 'src/app/Interfaces/Cities';

import * as ShoppingActions from '../actions/shopping.actions';
import * as UserActions from '../actions/user.actions';
import { IProduct } from '../../../app/Interfaces/Products';

import { AuthErrorLogin } from 'src/app/Interfaces/auth/Auth.error';
import { Cart, Item } from 'src/app/Interfaces/cart/GetCartUser';
import { IAddresses } from 'src/app/Interfaces/order/addresses';
import { IPayment } from 'src/app/Interfaces/Payment/Payment';
import { newCartActionGroup } from '../actions/actionGroup';

export interface Shopping {
  categories: Categories[] | null;

  products: IProduct[] | null;
  loading: boolean | null;
  authErrorLogin: AuthErrorLogin | null;

  infoLogin: IUser | null;
  isRegistered: boolean | null;
  citiesList: ICities[] | null;
  errorAlert: any;

  cartId: string | null;
  cart: Cart | null;

  getDetailsShipments: { city: string; address: string } | null;
  orderID: string | null;
  DateCreatedCart: number | Date | null;
  unavailableDates: string[] | null;
  address: IAddresses | null;
  customerId: string;
  payments: IPayment[] | null;
}

export const initialShoppingState: Shopping | null = {
  categories: null,
  products: null,
  loading: null,
  authErrorLogin: null,

  infoLogin: null,
  isRegistered: null, //check in register component if user can to continue with registration
  citiesList: null,
  errorAlert: null,

  cartId: null,
  cart: null,
  getDetailsShipments: null,
  orderID: '',
  DateCreatedCart: null,
  unavailableDates: null,
  customerId: '',
  address: null,
  payments: null,
};

export const shoppingReducer = createReducer(
  initialShoppingState,
  on(ShoppingActions.fetchProductsInit, (state, payload) => ({
    ...state,

    loading: true,
  })),
  on(ShoppingActions.fetchCategories, (state) => ({
    ...state,
    loading: true,
  })),
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
    products: updateProducts(products, state?.cart?.items),
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
  on(UserActions.loginInit, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    UserActions.loginInitSuccess,
    UserActions.registerUserSuccess,
    (state, { infoLogin }) => ({
      ...state,
      infoLogin: infoLogin,
      loading: false,
      errorAlert: null,
      customerId: infoLogin?.userId,
    })
  ),
  on(UserActions.loginInitFailure, (state, { error }) => ({
    ...state,
    authErrorLogin: error,
    loading: false,
  })),

  on(UserActions.checkRegisterInit, (state, action) => ({
    ...state,
    id: action.id,
    loading: false,
  })),
  on(UserActions.checkRegisterSuccess, (state, { success }) => ({
    ...state,
    isRegistered: success,
    loading: false,
    errorAlert: null,
  })),
  on(UserActions.checkRegisterFailure, (state, { error }) => ({
    ...state,
    errorAlert: error,
    isRegistered: false,
    loading: false,
  })),
  on(UserActions.registerUserFailure, (state, { error }) => ({
    ...state,
    authErrorLogin: error,
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
      return item._id == product._id ? product : item;
    }),
    loading: false,
  })),

  on(
    ShoppingActions.successUpdateItemQuantityInCart,
    (state, { cartList }) => ({
      ...state,
      cart: cartList,
      products: updateProducts(state.products, cartList?.items),
    })
  ),
  on(
    ShoppingActions.DeleteSingleProductFromCartListInit,

    (state, { itemId, productId }) => ({
      ...state,
      cart: {
        ...state.cart,
        items: state.cart.items.filter((item) => {
          return item._id !== itemId;
        }),
      },
      products: findOneAndUpdateQuantityToZero(state.products, productId),
    })
  ),
  on(ShoppingActions.initUpdateItemQuantityInCart, (state, { itemUpdate }) => ({
    ...state,
    products: findOneAndUpdateQuantityToZero(
      state.products,
      itemUpdate.productRefId
    ),
  })),
  on(ShoppingActions.deleteAllItemsInCartSuccess, (state, {}) => ({
    ...state,
    cart: {
      ...state.cart,
      items: [],
    },
    products: updateAllProductQuantityToZero(state.products),
  })),

  on(
    ShoppingActions.getCartByCartIdSuccess,
    ShoppingActions.getCartByCustomerIdSuccess,
    newCartActionGroup.successCreateCart,
    (state, { cart }) => ({
      ...state,
      cart: cart,
      products: updateProducts(state.products, cart?.items),
    })
  ),
  on(
    ShoppingActions.getUserDetailsShipmentsSuccess,
    (state, { city, address }) => ({
      ...state,
      getDetailsShipments: { city, address },
    })
  ),
  on(ShoppingActions.lastOrderSuccess, (state, { OrderDetail }) => ({
    ...state,
    OrderDetail: OrderDetail,
  })),
  on(ShoppingActions.createNewOrderSuccess, (state, { _id }) => ({
    ...state,
    orderID: _id,
  })),
  on(ShoppingActions.selectUnavailableDatesSuccess, (state, { date }) => ({
    ...state,
    unavailableDates: date,
  })),
  on(UserActions.successEditUserPersonalDetails, (state, { user }) => ({
    ...state,
    infoLogin: user,
  })),
  on(ShoppingActions.successFetchAddress, (state, { payload }) => ({
    ...state,
    address: payload,
  })),
  on(ShoppingActions.successEditAddress, (state, { payload }) => ({
    ...state,
    address: payload,
  })),
  on(
    ShoppingActions.successGetAllPaymentByCustomerId,
    (state, { payload }) => ({
      ...state,
      payments: payload,
    })
  ),
  on(ShoppingActions.successCreateNewPayment, (state, { payload }) => ({
    ...state,
    payments: state.payments.concat(payload),
  })),
  on(ShoppingActions.successUpdatePayment, (state, { payload }) => ({
    ...state,
  })),
  on(ShoppingActions.successDeletePaymentBy_Id, (state, { _id }) => ({
    ...state,
    payments: state.payments.filter((p) => p._id !== _id),
  })),

  on(ShoppingActions.logOut, (state) => ({
    ...state,
    cartId: null,

    cartMessage: null,

    citiesList: null,
    editProduct: null,
    error: null,
    errorAlert: null,
    errorInRegister: null,
    getDetailsShipments: null,
    infoLogin: null,
    isRegistered: null,
    OrderDetail: null,
    loading: null,
    orderID: null,

    DateCreatedCart: null,
    unavailableDates: [],
    authErrorLogin: null,
    cart: null,
    customerId: null,
    payments: null,
  }))
);

const updateProducts = (products: IProduct[], items: Item[]): IProduct[] => {
  if (!products) return [];
  if(!items) return products
  const updateProducts: IProduct[] = [...products];

  items.forEach((item: Item) => {
    const productId: string = item.productRefId._id;
    let index: number = updateProducts.findIndex((p) => p._id === productId);
    if (index > -1) {
      const product: IProduct = updateProducts[index];
      updateProducts.splice(index, 1, { ...product, quantity: item.quantity });
    }
  });
  return updateProducts;
};

function updateAllProductQuantityToZero(products: IProduct[]): IProduct[] {
  let updateProducts: IProduct[] = [...products];
  updateProducts.forEach((p, i) => {
    if (p.quantity >= 0) {
      const product: IProduct = updateProducts[i];
      updateProducts.splice(i, 1, { ...product, quantity: 0 });
    }
  });
  return updateProducts;
}

function findOneAndUpdateQuantityToZero(
  products: IProduct[],
  itemId: string
): IProduct[] {
  console.log(products, 'products.length');
  if (products === null) return [];
  const updateProducts: IProduct[] = [...products];
  updateProducts.find((p, i) => {
    const product: IProduct = updateProducts[i];

    p._id === itemId &&
      updateProducts.splice(i, 1, { ...product, quantity: 0 });
  });
  return updateProducts;
}
