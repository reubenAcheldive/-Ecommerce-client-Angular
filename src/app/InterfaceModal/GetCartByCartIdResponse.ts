export interface Products {
  _id: string;
  price: number;
  description: string;
  imgUrl: string;
  name: string;
  totalPrice?:number
}

export interface CartItems {
  quantity: number;
  products: Products;
  _id: string;
}

export interface GetCartByCartIdResponse {
  _id: string;
  customerRef: string;
  date: number;
  status: number;
  cartItems: CartItems[];
  __v: number;
}
