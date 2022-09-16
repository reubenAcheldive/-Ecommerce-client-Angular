import { createActionGroup, props } from '@ngrx/store';
import { Cart } from 'src/app/Interfaces/cart/GetCartUser';

export const newCartActionGroup = createActionGroup({
  source: 'create Cart action group',
  events: {
    'init Create Cart': props<{ customerRef: string }>(),
    'success Create Cart': props<{ cart: Cart }>(),
    'fail Create Cart': props<{ error: any }>(),
  },
});
