export interface IProduct {
  _id?: string;
  quantity?: number;
  name: string;
  categoryRef: string;

  price: number;
  imgUrl: string;
  description: string;

}
