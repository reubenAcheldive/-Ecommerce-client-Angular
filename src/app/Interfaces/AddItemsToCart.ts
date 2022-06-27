export interface Item {
  productRefId: string;
  quantity: number;
}
export interface AddItemsToCartByUserId {
  cartId: string;
  items: Item[];
}
