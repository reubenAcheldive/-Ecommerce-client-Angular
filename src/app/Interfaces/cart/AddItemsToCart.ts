import { Item } from "./GetCartUser";

export interface AddItems {
  cartId: string;
  items: Item[];
}
