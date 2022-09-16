import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, of, withLatestFrom ,pipe} from 'rxjs';

import { Injectable } from '@angular/core';

import * as shoppingActions from '../../state/actions/shopping.actions';

import { CitiesService } from '../../services/cities/cities.service';

import { selectCartList } from '../selectors/shopping-selectors';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/Interfaces/Products';

import { LoginService } from 'src/app/services/Auth/login/login.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductEditService } from 'src/app/services/product-edit/product-edit.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { AddressesService } from '../../services/order/addresses.service';
import { PaymentService } from 'src/app/services/Payment/payment.service';

@Injectable()
export class ShoppingEffects {
  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly loginService: LoginService,
    private readonly citiesService: CitiesService,
    private readonly categoryService: ProductService,
    private readonly productEditService: ProductEditService,
    private readonly shoppingCartService: ShoppingCartService,
    private readonly orderService: OrderService,
    private readonly addressesService: AddressesService,
    private readonly paymentService: PaymentService
  ) {}

  categories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.fetchCategories),
      exhaustMap(() => {
        return this.categoryService.fetchAllCategory().pipe(
          map((categories) => {
            return shoppingActions.fetchCategoriesSuccess({ categories });
          }),
          catchError((error) =>
            of(shoppingActions.fetchCategoriesFailure({ error }))
          )
        );
      })
    );
  });

  fetchCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.fetchCities),
      exhaustMap(() => {
        return this.citiesService.fetchCitiesApi().pipe(
          map((cities) => {
            return shoppingActions.fetchCitiesSuccess({ cities });
          }),
          catchError((error) =>
            of(shoppingActions.fetchCitiesFailure({ error }))
          )
        );
      })
    );
  });

  productByCategoryId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.fetchProductsInit),
      withLatestFrom(this.store.select(selectCartList)),
      exhaustMap(([action, cartResponse]) => {
        return this.categoryService
          .getAllProductByCategoryId(action.categoryId,cartResponse._id)
          .pipe(
            map((products: IProduct[]) => {
              return shoppingActions.fetchProductsSuccess({ products });
            }),
            catchError((error) =>
              of(shoppingActions.fetchProductsFailure({ error }))
            )
          );
      })
    );
  });

  productBySearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.fetchSingleProductsBySearch),
      exhaustMap((str) => {
        return this.categoryService.getProductsByName(str.str).pipe(
          map((products) =>
            shoppingActions.fetchSingleProductsBySearchSuccess({ products })
          ),

          catchError((error) =>
            of(shoppingActions.fetchSingleProductsBySearchFailure({ error }))
          )
        );
      })
    );
  });

  productEditByAdmin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.productEditByAdminSuccess),
      exhaustMap(({ product }) => {
        return this.productEditService.editProduct(product).pipe(
          map((product) => {
            return shoppingActions.productEditByAdminSuccess({
              product: product[0],
            });
          })
        );
      })
    );
  });

  getCartByIdCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.getCartByCartIdInit),
      exhaustMap(({ cartId }) => {
        return this.shoppingCartService.getCartByCartId(cartId).pipe(
          map((cart) => {
            return shoppingActions.getCartByCartIdSuccess({ cart });
          }),
          catchError((error) =>
            of(shoppingActions.getCartByCartIdFail({ error }))
          )
        );
      })
    );
  });
  // getCartByCustomerId$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(shoppingActions.getCartByCustomerIdInit),
  //     exhaustMap(({ customerRef }) => {
  //       return this.shoppingCartService.getCartByCustomerRef(customerRef).pipe(
  //         map((cart) => {
  //           console.log('get cart by useEffect', cart.cart[0].date);

  //           return shoppingActions.getCartByCustomerIdSuccess({ cart });
  //         }),
  //         catchError((error) =>
  //           of(shoppingActions.getCartByCustomerFail({ error }))
  //         )
  //       );
  //     })
  //   );
  // });
  DeleteAllProductCartList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.deleteAllItemsInCartInit),
      exhaustMap(({ cartId }) => {
        return this.shoppingCartService.deleteAllProducts(cartId).pipe(
          map(() => {
            return shoppingActions.deleteAllItemsInCartSuccess();
          }),
          catchError((error) =>
            of(shoppingActions.getCartByCustomerFail({ error }))
          )
        );
      })
    );
  });

  DeleteSingleProductCartList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.DeleteSingleProductFromCartListInit),
      exhaustMap(({ cartId, itemId, productId }) => {
        return this.shoppingCartService.deleteProduct(cartId, itemId).pipe(
          map(() => {
            return shoppingActions.DeleteSingleProductFromCartListSuccess();
          }),
          catchError((error) =>
            of(shoppingActions.DeleteSingleProductFromCartListFail({ error }))
          )
        );
      })
    );
  });

  createNewCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.createNewCartInit),
      exhaustMap(({ customerRef }) => {
        return this.shoppingCartService.addNewCart(customerRef).pipe(
          map((cart) => {
            console.log(
              { cart },
              'register created new Cart',
              cart.cart[0]._id
            );

            return shoppingActions.createNewCartSuccess({ cart: cart });
          }),
          catchError((error) =>
            of(shoppingActions.createNewCartFail({ error }))
          )
        );
      })
    );
  });

  getUserDetailsShipmentsInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.getUserDetailsShipmentsInit),
      exhaustMap(({ customerRef }) => {
        return this.orderService.getDetailsShipments(customerRef).pipe(
          map(({ address, city }) => {
            return shoppingActions.getUserDetailsShipmentsSuccess({
              city,
              address,
            });
          }),
          catchError((error) =>
            of(shoppingActions.getUserDetailsShipmentsError(error))
          )
        );
      })
    );
  });

  CreateOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.createNewOrderInit),
      exhaustMap(({ payload }) => {
        return this.orderService.CreateOrder(payload).pipe(
          map(({ message, idOrder }) => {
            return shoppingActions.createNewOrderSuccess({ _id: idOrder });
          }),
          catchError((error) => {
            return of(shoppingActions.createNewOrderFailed(error));
          })
        );
      })
    );
  });
  createNewProductByAdmin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.AddNewProductByAdminInit),
      exhaustMap(({ payload }) => {
        return this.productEditService.createNewProduct(payload).pipe(
          map((response) => {
            return shoppingActions.AddNewProductByAdminSuccess({ response });
          }),
          catchError((error) =>
            of(shoppingActions.AddNewProductByAdminFailed(error))
          )
        );
      })
    );
  });
  fetchLastOrderByID$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.lastOrderInit),
      exhaustMap(({ _id }) => {
        return this.orderService.getLastOrderDetail(_id).pipe(
          map((action) => {
            return shoppingActions.lastOrderSuccess({
              OrderDetail: action,
            });
          }),
          catchError((error) => of(shoppingActions.lastOrderFail(error)))
        );
      })
    );
  });

  fetchAllBlockDateDelivery$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.fetchUnavailableDatesInit),
      exhaustMap(() => {
        return this.orderService.fetchAllUnavailableDates().pipe(
          map((action) => {
            return shoppingActions.fetchUnavailableDatesSuccess({
              date: action,
            });
          }),
          catchError((error) =>
            of(shoppingActions.fetchUnavailableDatesFail(error))
          )
        );
      })
    );
  });

  updateItemOnCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.initUpdateItemQuantityInCart),
      exhaustMap(({ itemUpdate }) => {
        console.log({ itemUpdate });
        return this.shoppingCartService.updateItemOnCart(itemUpdate).pipe(
          map((cartList) => {
            return shoppingActions.successUpdateItemQuantityInCart({
              cartList,
            });
          }),
          catchError((err) =>
            of(shoppingActions.failUpdateItemQuantityInCart(err))
          )
        );
      })
    );
  });

  fetchAddresses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.InitFetchAddress),
      exhaustMap(({ customerRef }) => {
        return this.addressesService.getAddressesList(customerRef).pipe(
          map((payload) => {
            return shoppingActions.successFetchAddress({ payload });
          })
        );
      }),
      catchError((err) => of(shoppingActions.failureFetchAddress(err)))
    );
  });
  editAddresses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.InitEditAddress),
      exhaustMap(({ payload }) => {
        return this.addressesService.editAddress(payload).pipe(
          map((payload) => {
            return shoppingActions.successEditAddress({ payload });
          })
        );
      }),
      catchError((err) => of(shoppingActions.failureEditAddress(err)))
    );
  });

  getAllPayment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.initGetAllPaymentByCustomerId),
      exhaustMap(({ customerId }) => {
        console.log({ customerId }, 'customerId');
        return this.paymentService.getAllPaymentBy_CustomerId(customerId).pipe(
          map((payload) => {
            return shoppingActions.successGetAllPaymentByCustomerId({
              payload,
            });
          })
        );
      }),
      catchError((err) =>
        of(shoppingActions.failGetAllPaymentByCustomerId(err))
      )
    );
  });

  createNewPayment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.initCreateNewPayment),

      exhaustMap(({ payload }) => {

        return this.paymentService.addNewPayment(payload).pipe(
          map((payload) => {
            return shoppingActions.successCreateNewPayment({
              payload,
            });
          })
        );
      }),
      catchError((err) => of(shoppingActions.failCreateNewPayment(err)))
    );
  });

  updateOnePayment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.initUpdatePayment),
      exhaustMap(({ payload }) => {
        console.log(payload, 'updateOnePayment$ ');
        return this.paymentService.addNewPayment(payload).pipe(
          map((payload) => {
            return shoppingActions.successUpdatePayment({
              payload,
            });
          })
        );
      }),
      catchError((err) => of(shoppingActions.failUpdatePayment(err)))
    );
  });

  deleteOnPayment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.initDeletePaymentBy_Id),
      exhaustMap(({ _id }) => {
        return this.paymentService.deletePaymentById(_id).pipe(
          map(() => {
            console.log({ _id }, ' deleteOnPayment$');
            return shoppingActions.successDeletePaymentBy_Id({ _id });
          })
        );
      }),
      catchError((err) => of(shoppingActions.failDeletePaymentBy_Id(err)))
    );
  });
}
