import { CartItems } from "./GetCartByCartIdResponse";


  

    export interface Cart {
        _id: string;
        customerRef: string;
        date: number;
        status: number;
        cartItems: CartItems[];
     
    }

    export interface GetCartByCustomerResponse {
        message: string;
        cart: Cart[];
        hasOpenCart: boolean;
    }

