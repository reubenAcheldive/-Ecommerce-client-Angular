

  export interface ProductRefId {
      _id: string;
      name: string;
      categoryRef: string;
      price: number;
      imgUrl: string;
      description: string;
      __v: number;
  }

  export type Item =  {
      quantity: number;
      productRefId: ProductRefId;
      _id: string;
  }

  export interface CartResponseForUser {
      _id: string;
      customerRef: string;
      date: number;
      status: number;
      __v: number;
      items: Item[];
  }


