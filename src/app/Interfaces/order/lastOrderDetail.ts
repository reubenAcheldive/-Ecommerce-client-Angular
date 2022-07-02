

    export interface OrderDetail {
        _id: string;
        cartRef: string;
        customerRef: string;
        DateDelivery: Date;
        TotalPrice: number;
        DateOfCreateOrder: Date;
        address: string;
        cityDelivery: string;
        fourDigitCreditCard: number;
        __v: number;
    }

    export interface SavedOrderIds {
        cartId: string;
        orderId: string;
    }
