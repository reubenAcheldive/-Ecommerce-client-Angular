import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { LoginService } from '../../services/login/login.service';
import { Injectable } from '@angular/core';
import { ProductService } from 'src/app/services/store/product/product.service';
import * as shoppingActions from '../../state/actions/shopping.actions';
import { ProductEditService } from '../../services/store/product-edit/product-edit.service';
import { ShoppingCartService } from '../../services/store/shopping-cart/shopping-cart.service';

import { CitiesService } from '../../services/store/cities/cities.service';
import { OrderService } from 'src/app/services/store/order/order.service';

@Injectable()
export class ShoppingEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly loginService: LoginService,
    private readonly citiesService: CitiesService,
    private readonly categoryService: ProductService,
    private readonly productEditService: ProductEditService,
    private readonly shoppingCartService: ShoppingCartService,

    private readonly orderService: OrderService
  ) {}

  category$ = createEffect(() => {
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
      exhaustMap((action) => {
        console.log(action.categoryId);

        return this.categoryService
          .getAllProductByCategoryId(action.categoryId)
          .pipe(
            map((products) => {
              console.log(products);

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
      ofType(shoppingActions.DeleteAllProductCartListInit),
      exhaustMap(({ cartId }) => {
        return this.shoppingCartService.deleteAllProducts(cartId).pipe(
          map(() => {
            return shoppingActions.DeleteAllProductCartListSuccess();
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
      exhaustMap(({ cartId, productId }) => {
        return this.shoppingCartService.deleteProduct(cartId, productId).pipe(
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
  addProductToList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.addProductsToListInit),
      exhaustMap(({ addItemsCartByUserId }) => {
        return this.shoppingCartService
          .addProductToList(addItemsCartByUserId)
          .pipe(
            map((action) => {
              console.log(action, 'result  addProductToList$');

              return shoppingActions.addProductsToListSuccess({
                cartItems: action,
              });
            }),
            catchError((error) =>
              of(shoppingActions.addProductsToListFail({ error }))
            )
          );
      })
    );
  });

  // createNewCart$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(shoppingActions.createNewCartInit),
  //     exhaustMap(({ customerRef }) => {
  //       return this.shoppingCartService.addNewCart(customerRef).pipe(
  //         map((cart) => {
  //           console.log(
  //             { cart },
  //             'register created new Cart',
  //             cart.cart[0]._id
  //           );

  //           return shoppingActions.createNewCartSuccess({ cart: cart });
  //         }),
  //         catchError((error) =>
  //           of(shoppingActions.createNewCartFail({ error }))
  //         )
  //       );
  //     })
  //   );
  // });

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

  createNewOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingActions.createNewOrderInit),
      exhaustMap(({ payload }) => {
        return this.orderService.createNewOrder(payload).pipe(
          map(({ message, idOrder }) => {
            return shoppingActions.createNewOrderSuccess({ _id: idOrder });
          }),
          catchError((error) => {
            console.log(error, 'create order effect');
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
        console.log({ _id }, 'check _id');

        return this.orderService.getLastOrderDetail(_id).pipe(
          map((action) => {
            return shoppingActions.lastOrderSuccess({
              lastOrderDetail: action,
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
      ofType(shoppingActions.initUpdateQuantity),
      exhaustMap(({ itemUpdate }) => {
        return this.shoppingCartService.updateItemOnCart(itemUpdate).pipe(
          map((cartList) => {
            return shoppingActions.successUpdateQuantity({ cartList });
          }),
          catchError((err)=> of(shoppingActions.failUpdateQuantity(err)))
        );
      })
    );
  });
}
