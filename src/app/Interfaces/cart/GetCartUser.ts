import { IProduct } from "../Products";

export type Item = {
  quantity: number;
  productRefId: IProduct;
  _id: string;
};

export interface Cart {
  _id: string;
  customerRef: string;
  date: number;
  status: number;
  __v: number;
  items: Item[];
}
